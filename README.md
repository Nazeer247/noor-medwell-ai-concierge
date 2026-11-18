# Noor MedWell AI Concierge

A premium responsive multilingual medical-concierge interface inspired by the approved Noor MedWell visual reference.

## Run locally
npm install
npm run dev

## Deploy on Cloudflare Pages
Build command: npm run build
Build output directory: dist
Functions in functions/api are deployed automatically by Cloudflare Pages.

## Configure the AI endpoint
Set these as Cloudflare Pages environment variables (and local .dev.vars when using Wrangler):
- AI_BASE_URL: base URL for an OpenAI-compatible API, without /chat/completions
- AI_API_KEY: secret API key
- AI_MODEL: model identifier

Never put API keys in frontend code or commit them to GitHub. Without these values, the chat shows a clear setup message instead of pretending the AI is connected.

## Current capabilities
- Responsive Noor MedWell-branded concierge UI
- Language selector with 30+ languages
- Chat composer and optional image attachment preview/removal
- AI chat endpoint with multilingual coordination-focused instructions
- No server-side storage of chat messages or uploaded images

## Clinical safety and privacy
This is a coordination assistant, not a medical diagnostic system. It must not diagnose, prescribe or replace clinicians. The current chat endpoint accepts text only; image attachments are previewed locally in the browser and are not transmitted. Before enabling secure medical-image submission, implement explicit informed consent, authenticated staff access, encryption, retention/deletion controls, provider/data-processing review and a clinician review workflow. Do not use real patient data in testing until those controls are in place.
