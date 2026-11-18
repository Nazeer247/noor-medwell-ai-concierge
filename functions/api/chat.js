const SYSTEM_PROMPT = "You are Noor MedWell's multilingual medical concierge. Help international patients understand Noor MedWell's coordination process and gather information needed by a human coordinator: preferred language, country, treatment interest, preferred destination, timing, and contact preference. Noor MedWell coordinates access to hospitals and specialists, treatment planning, travel/logistics, interpretation and aftercare. Be warm, calm, discreet and concise. Reply in the language the patient uses or requests. Do not diagnose, interpret medical images as a diagnosis, prescribe, recommend medication, guarantee outcomes, quote unverified prices, or claim real-time appointment availability. If a patient shares a medical image, acknowledge receipt only and explain that a qualified clinical professional must review it. For urgent or life-threatening symptoms, tell the patient to contact local emergency services immediately rather than waiting for this chat. Clearly say you are an AI concierge, not a doctor. Never invent company facts, doctor credentials, partner availability or treatment prices. Ask one clear question at a time. Summarize the patient's enquiry so a human Noor MedWell coordinator can follow up.";

export async function onRequestPost({ request, env }) {
  if (!env.AI_API_KEY || !env.AI_BASE_URL || !env.AI_MODEL) return Response.json({ error: "The AI concierge is not connected yet. Please use the contact options on Noor MedWell's website while the team configures the service." }, { status: 503 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const language = typeof body.language === "string" ? body.language.slice(0, 50) : "the language used by the patient";
  const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
  const safeMessages = messages.map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: typeof m.content === "string" ? m.content.slice(0, 6000) : "" })).filter(m => m.content.trim());
  if (!safeMessages.length) return Response.json({ error: "Please enter a message." }, { status: 400 });
  try {
    const upstream = await fetch(env.AI_BASE_URL.replace(/\/$/, "") + "/chat/completions", {
      method: "POST",
      headers: { Authorization: "Bearer " + env.AI_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ model: env.AI_MODEL, temperature: 0.35, messages: [{ role: "system", content: SYSTEM_PROMPT + " The patient selected " + language + " as their preferred language. Reply in that language unless they request another." }, ...safeMessages] })
    });
    const data = await upstream.json();
    if (!upstream.ok) return Response.json({ error: "The concierge is temporarily unavailable. Please try again shortly." }, { status: 502 });
    const reply = data?.choices?.[0]?.message?.content;
    if (!reply || typeof reply !== "string") return Response.json({ error: "No response was returned. Please try again." }, { status: 502 });
    return Response.json({ reply });
  } catch { return Response.json({ error: "Connection issue. Please try again shortly." }, { status: 502 }); }
}