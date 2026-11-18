export async function onRequestPost({ request, env }) {
  if (!env.AI_API_KEY || !env.AI_BASE_URL || !env.AI_MODEL) return Response.json({ error: "Translation service is not configured." }, { status: 503 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const language = typeof body.language === "string" ? body.language.slice(0, 80) : "English";
  const texts = Array.isArray(body.texts) ? body.texts.slice(0, 160).map(x => String(x).slice(0, 1000)) : [];
  if (!texts.length) return Response.json({ translations: [] });
  try {
    const upstream = await fetch(env.AI_BASE_URL.replace(/\/$/, "") + "/chat/completions", {
      method: "POST",
      headers: { Authorization: "Bearer " + env.AI_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: env.AI_MODEL, temperature: 0,
        messages: [
          { role: "system", content: "You are a professional website UI translator. Translate each supplied string into " + language + ". Preserve meaning, tone, names, URLs, placeholders, punctuation, and HTML-free plain text. Return ONLY a valid JSON array of strings in exactly the same order and count. Do not add commentary." },
          { role: "user", content: JSON.stringify(texts) }
        ]
      })
    });
    const data = await upstream.json();
    if (!upstream.ok) return Response.json({ error: "Translation provider unavailable." }, { status: 502 });
    let raw = data?.choices?.[0]?.message?.content || "";
    raw = raw.replace(/^\s*```(?:json)?\s*/i, "").replace(/\s*```\s*$/, "");
    const translations = JSON.parse(raw);
    if (!Array.isArray(translations) || translations.length !== texts.length || translations.some(x => typeof x !== "string")) throw new Error("Invalid translation response");
    return Response.json({ translations });
  } catch {
    return Response.json({ error: "Could not translate the interface. Please try again." }, { status: 502 });
  }
}
