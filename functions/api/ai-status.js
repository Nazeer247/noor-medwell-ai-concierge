export async function onRequestGet({ env }) {
  const configured = {
    apiKey: Boolean(env.AI_API_KEY),
    baseUrl: Boolean(env.AI_BASE_URL),
    model: Boolean(env.AI_MODEL)
  };

  if (!configured.apiKey || !configured.baseUrl || !configured.model) {
    return Response.json({
      configured,
      connected: false,
      message: "One or more AI settings are missing from the Pages Functions runtime environment."
    }, { status: 503 });
  }

  try {
    const baseUrl = String(env.AI_BASE_URL).replace(/\\/$/, "");
    const response = await fetch(baseUrl + "/models", {
      method: "GET",
      headers: { Authorization: "Bearer " + env.AI_API_KEY }
    });

    let data = {};
    try { data = await response.json(); } catch {}

    if (!response.ok) {
      return Response.json({
        configured,
        connected: false,
        providerStatus: response.status,
        message: response.status === 401 || response.status === 403
          ? "The provider rejected the API key. Check that it is a valid Groq API key."
          : "The AI provider returned an error. Check the API base URL and provider account."
      }, { status: 502 });
    }

    const models = Array.isArray(data.data) ? data.data : [];
    const modelAvailable = models.some(item => item && item.id === env.AI_MODEL);

    return Response.json({
      configured,
      connected: true,
      modelAvailable,
      model: env.AI_MODEL,
      message: modelAvailable
        ? "The Groq connection and selected model are available."
        : "The API key works, but the selected model was not found in the provider model list."
    });
  } catch {
    return Response.json({
      configured,
      connected: false,
      message: "Could not reach the AI provider. Check the API base URL or provider availability."
    }, { status: 502 });
  }
}
