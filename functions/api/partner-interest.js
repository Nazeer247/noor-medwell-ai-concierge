const ALLOWED_PARTNERS = new Set([
  "Acıbadem Healthcare Group",
  "Liv Hospital",
  "Medicana Health Group",
  "Memorial Hospitals Group",
  "Hisar Hospital Intercontinental"
]);

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  const partner = typeof body.partner === "string" ? body.partner.trim() : "";
  const id = typeof body.id === "string" ? body.id.trim().slice(0, 80) : "";
  const language = typeof body.language === "string" ? body.language.trim().slice(0, 40) : "English";
  if (!ALLOWED_PARTNERS.has(partner) || !/^[a-zA-Z0-9_-]{8,80}$/.test(id)) {
    return Response.json({ error: "Invalid partner-interest details." }, { status: 400 });
  }
  if (!env.LEADS_DB) {
    return Response.json({ error: "Partner-interest storage is not configured yet." }, { status: 503 });
  }
  try {
    await env.LEADS_DB.prepare(
      "INSERT OR IGNORE INTO partner_interests (id, partner_name, status, preferred_language) VALUES (?, ?, 'interested', ?)"
    ).bind(id, partner, language).run();
    return Response.json({ saved: true, id });
  } catch {
    return Response.json({ error: "We could not save this interest right now." }, { status: 500 });
  }
}
