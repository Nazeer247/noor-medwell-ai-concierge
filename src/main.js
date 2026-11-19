import './styles.css';

const languages = [
  ['en','🇬🇧','English'],['tr','🇹🇷','Türkçe'],['de','🇩🇪','Deutsch'],['fr','🇫🇷','Français'],
  ['ar','🇦🇪','العربية'],['it','🇮🇹','Italiano'],['es','🇪🇸','Español'],['zh','🇨🇳','中文'],
  ['hi','🇮🇳','हिन्दी'],['pt','🇵🇹','Português'],['ru','🇷🇺','Русский'],['ja','🇯🇵','日本語'],
  ['ko','🇰🇷','한국어'],['nl','🇳🇱','Nederlands'],['pl','🇵🇱','Polski'],['ro','🇷🇴','Română'],
  ['uk','🇺🇦','Українська'],['fa','🇮🇷','فارسی'],['ur','🇵🇰','اردو'],['bn','🇧🇩','বাংলা'],
  ['id','🇮🇩','Bahasa Indonesia'],['ms','🇲🇾','Bahasa Melayu'],['vi','🇻🇳','Tiếng Việt'],['th','🇹🇭','ไทย'],
  ['el','🇬🇷','Ελληνικά'],['sv','🇸🇪','Svenska'],['no','🇳🇴','Norsk'],['da','🇩🇰','Dansk'],
  ['fi','🇫🇮','Suomi'],['cs','🇨🇿','Čeština'],['hu','🇭🇺','Magyar'],['he','🇮🇱','עברית'],
  ['fil','🇵🇭','Filipino'],['sw','🇰🇪','Kiswahili'],['ta','🇱🇰','தமிழ்'],['pa','🇮🇳','ਪੰਜਾਬੀ']
];
const quickActions = [
  ['▦','Book Your Consultation','consult'],
  ['✈','Plan Your Medical Trip','trip'],
  ['⚕','Explore Treatments','treatments'],
  ['◉','24/7 Patient Assistance','support']
];
const app = document.querySelector('#app');
app.innerHTML = `
<header class="topbar">
  <a class="brand" href="https://www.noormedwell.com/" target="_blank" rel="noreferrer"><img src="https://www.noormedwell.com/static/images/Asset-1-horizontal@300x-1024x187.png" alt="Noor MedWell — Global Medical Concierge"></a>
  <div class="top-actions">
    <div class="language-wrap">
      <button class="language-trigger" id="languageTrigger" aria-expanded="false"><span class="globe">◎</span><span id="currentLanguage">EN</span><span class="chevron">⌄</span></button>
      <div class="language-menu" id="languageMenu" hidden><div class="language-menu-title">Choose your language</div><div class="language-grid" id="languageGrid"></div></div>
    </div>
    <button class="menu-button" id="menuButton" aria-label="Open menu"><span></span><span></span><span></span></button>
  </div>
</header>
<main class="page">
  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">GLOBAL MEDICAL CONCIERGE <i></i></div>
      <h1>World-Class<br>Medicine.<br><em>Guided With<br>Precision.</em></h1>
      <p>Trusted Hospitals. Expert Specialists.<br>Seamless Treatment Journeys.</p>
      <a class="gold-button" href="#concierge">Explore Our Services <b>›</b></a>
    </div>
    <div class="hero-photo" role="img" aria-label="Hospital partner in Noor MedWell's medical network"></div>
    <div class="hero-swoosh"></div>
  </section>

  <section class="welcome-card" id="concierge">
    <div class="portrait-wrap"><img src="https://www.noormedwell.com/static/images/jemal.png" alt="Jemal H., Noor MedWell founder"></div>
    <div class="welcome-copy">
      <h2>Hello! <span class="wave">👋</span></h2>
      <h3>Welcome to <strong>Noor MedWell.</strong><br>How can I assist you today?</h3>
      <p>Personal guidance for treatment options, hospital matching, travel coordination and support throughout your medical journey.</p>
      <span class="online"><i></i> Online 24/7</span>
    </div>
    <div class="welcome-leaf">❧</div>
  </section>

  <section class="quick-grid" aria-label="Concierge services">
    ${quickActions.map((a,i)=>`<button class="quick-card" type="button" data-action="${a[2]}"><span class="quick-icon">${a[0]}</span><span>${a[1]}</span><b>›</b></button>`).join('')}
  </section>

<section class="language-strip" aria-label="Popular languages">
    <button data-lang="en"><span>🇬🇧</span> English</button><i></i>
    <button data-lang="tr"><span>🇹🇷</span> Türkçe</button><i></i>
    <button data-lang="de"><span>🇩🇪</span> Deutsch</button><i></i>
    <button id="moreLanguages">More languages <b>⌄</b></button>
  </section>

  <section class="privacy-banner">
    <span class="privacy-icon">♙</span><i></i>
    <div><strong>Your Health is Our Priority</strong><p>Your information is secure and confidential.</p></div>
    <span class="privacy-leaf">❧</span>
  </section>

  <section class="chat-panel">
    <div class="chat-heading"><div><span class="chat-dot"></span><strong>Noor MedWell Concierge</strong><small>AI assistant · Multilingual support</small></div><button id="clearChat" title="Clear conversation">↺</button></div>
    <div class="messages" id="messages" aria-live="polite">
      <div class="message assistant"><div class="message-avatar">N</div><div class="bubble">Welcome to Noor MedWell. We coordinate medical journeys for international patients, from understanding your needs and matching you with suitable healthcare providers to travel arrangements and aftercare coordination. What treatment or support are you looking for, and which country are you contacting us from?</div></div>
    </div>
    <div class="attachment-preview" id="attachmentPreview" hidden></div>
    <div class="composer">
      <label class="attach-button" for="imageInput" title="Attach a medical image" aria-label="Attach an image"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"></rect><circle cx="8.5" cy="9" r="1.5"></circle><path d="m21 15-5-5L5 20"></path></svg><input id="imageInput" type="file" accept="image/png,image/jpeg,image/webp" hidden></label>
      <textarea id="messageInput" rows="1" placeholder="Ask about your treatment or medical journey..." aria-label="Write a message"></textarea>
      <button class="send-button" id="sendButton" aria-label="Send message">➤</button>
    </div>
    <p class="disclaimer">AI concierge for information and coordination only — not a medical diagnosis or emergency service.</p>
  </section>
</main>
<section class="journey-panel" id="journeyPanel" hidden aria-modal="true" role="dialog" aria-labelledby="journeyTitle">
  <div class="journey-backdrop" data-close-panel></div>
  <div class="journey-sheet"><header><div><small>NOOR MEDWELL CONCIERGE</small><h2 id="journeyTitle">Explore your care options</h2></div><button class="journey-close" type="button" data-close-panel aria-label="Close">×</button></header><div class="journey-content" id="journeyContent"></div></div>
</section>
<div class="toast" id="toast" role="status"></div>
<div class="mobile-menu" id="mobileMenu" hidden><button data-scroll="concierge">Talk to Concierge</button><button data-open-journey="trip">Plan Your Medical Trip</button><button data-open-journey="treatments">Explore Treatments</button><button data-open-journey="support">24/7 Patient Assistance</button></div>
`;

const $ = id => document.getElementById(id);
let selectedLanguage = 'en';
let attachment = null;
let messages = [];
let busy = false;
const languageGrid = $('languageGrid');
languageGrid.innerHTML = languages.map(([code,flag,name])=>`<button class="language-option" data-lang="${code}"><span>${flag}</span>${name}</button>`).join('');

function toast(message){const el=$('toast');el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),3200);}
let translationRun=0;
const originalText=new WeakMap(),originalAttrs=new WeakMap();
async function translateInterface(){
 const run=++translationRun,lang=languages.find(x=>x[0]===selectedLanguage);if(!lang)return;
 document.documentElement.lang=selectedLanguage;
 document.documentElement.dir=['ar','fa','ur','he'].includes(selectedLanguage)?'rtl':'ltr';
 const nodes=[],walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  const n=walker.currentNode;
  if(n.nodeValue.trim()&&!n.parentElement.closest('script,style,.language-option')){
   if(!originalText.has(n))originalText.set(n,n.nodeValue);
   nodes.push(n);
  }
 }
 const attrs=[];
 document.querySelectorAll('input,textarea,button,[aria-label],[title],img').forEach(el=>{
  ['placeholder','aria-label','title','alt'].forEach(a=>{
   if(el.hasAttribute(a)&&el.getAttribute(a).trim()){
    let saved=originalAttrs.get(el);if(!saved){saved={};originalAttrs.set(el,saved);}
    if(!(a in saved))saved[a]=el.getAttribute(a);
    attrs.push([el,a,saved[a]]);
   }
  });
 });
 const originals=[...nodes.map(n=>originalText.get(n)),...attrs.map(x=>x[2])];
 if(selectedLanguage==='en'){
  nodes.forEach(n=>n.nodeValue=originalText.get(n));attrs.forEach(x=>x[0].setAttribute(x[1],x[2]));return;
 }
 const translated=[];
 for(let i=0;i<originals.length;i+=100){
  const response=await fetch('/api/translate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({language:lang[2],texts:originals.slice(i,i+100)})});
  if(!response.ok)throw new Error('Translation service unavailable');
  const data=await response.json();translated.push(...data.translations);
  if(run!==translationRun)return;
 }
 if(translated.length!==originals.length)throw new Error('Incomplete translation');
 nodes.forEach((n,i)=>n.nodeValue=translated[i]);
 attrs.forEach((x,i)=>x[0].setAttribute(x[1],translated[nodes.length+i]));
}
function selectLanguage(code){
 const lang=languages.find(x=>x[0]===code);if(!lang)return;
 selectedLanguage=code;$('currentLanguage').textContent=code.toUpperCase();
 document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('selected',b.dataset.lang===code));
 $('languageMenu').hidden=true;$('languageTrigger').setAttribute('aria-expanded','false');
 translateInterface().then(()=>toast('Language changed to '+lang[2]+'.')).catch(()=>toast('Could not translate the page. Please try again.'));
}
$('languageTrigger').addEventListener('click',()=>{const m=$('languageMenu');m.hidden=!m.hidden;$('languageTrigger').setAttribute('aria-expanded',String(!m.hidden));});
$('moreLanguages').addEventListener('click',()=>{$('languageMenu').hidden=false;$('languageTrigger').setAttribute('aria-expanded','true');$('languageMenu').scrollIntoView({block:'nearest'});});
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>selectLanguage(b.dataset.lang)));
document.addEventListener('click',e=>{if(!e.target.closest('.language-wrap')&&!e.target.closest('#moreLanguages')){$('languageMenu').hidden=true;$('languageTrigger').setAttribute('aria-expanded','false');}});
$('menuButton').addEventListener('click',()=>{$('mobileMenu').hidden=!$('mobileMenu').hidden;});
document.querySelectorAll('.mobile-menu [data-scroll]').forEach(b=>b.addEventListener('click',()=>{$('concierge').scrollIntoView({behavior:'smooth'});$('mobileMenu').hidden=true;}));
const journeyPanel=$('journeyPanel'), journeyContent=$('journeyContent');
function closeJourney(){journeyPanel.hidden=true;document.body.classList.remove('panel-open');}
function openJourney(title,html){$('journeyTitle').textContent=title;journeyContent.innerHTML=html;journeyPanel.hidden=false;document.body.classList.add('panel-open');journeyContent.scrollTop=0;translateInterface().catch(()=>{});}
journeyPanel.addEventListener('click',e=>{if(e.target.closest('[data-close-panel]'))closeJourney();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeJourney();});
function startGuidedFlow(kind){
 closeJourney();$('concierge').scrollIntoView({behavior:'smooth',block:'start'});
 const prompts={
  consult:"I would like to book a private consultation with Noor MedWell. Please guide me one question at a time. First ask which country I am contacting you from and what treatment or medical support I am looking for. Then collect only the relevant details: my goals, any relevant medical history or reports I choose to share, preferred timing, travel considerations, and a safe contact method. Explain that Noor MedWell reviews my enquiry and coordinates suitable hospitals or specialists in its network. At the end, prepare a clear summary for the Noor MedWell team. Do not say a request has been submitted or sent unless a connected submission system confirms it.",
  trip:"I want to plan a medical trip with Noor MedWell. Please guide me through the process one question at a time. Explain how Noor MedWell reviews my treatment goals, matches my needs with suitable hospitals and doctors in its trusted network, coordinates appointments and helps plan travel, accommodation, interpretation and local logistics where available. Ask my country, treatment interest, preferred destination or timing, travel party and support needs. Do not promise a hospital match, visa approval, price, appointment or service until confirmed by the Noor MedWell team.",
  support:"I need patient assistance from Noor MedWell. Please help me understand the medical tourism process, treatment coordination, hospital matching, travel planning or next steps. Ask what I need help with and guide me clearly. The AI assistant is available 24/7, but a human coordinator may respond during the team's working hours. Prepare a concise handover summary if human follow-up is needed. For urgent or life-threatening symptoms, tell me to contact local emergency services immediately.",
  hospital:"I would like Noor MedWell to help match me with a suitable hospital or specialist. Ask about my treatment needs, country, preferred city and timing, then explain that Noor MedWell will review suitable providers in its trusted network and coordinate the next steps. Do not show a public directory or encourage me to bypass Noor MedWell."
 };
 $('messageInput').value=prompts[kind]||prompts.support;$('messageInput').focus();
}
function openPlanPanel(){
 openJourney('Plan Your Medical Trip',`<p class="journey-intro">Planning treatment in another country can feel complicated. Noor MedWell helps bring the medical and travel arrangements together, so you have one coordinated point of contact from your first enquiry through your return and follow-up.</p>
 <div class="journey-highlight"><strong>Your journey, coordinated step by step</strong><p>Tell us what care you are exploring. Our team reviews your priorities and helps identify suitable options within its trusted healthcare network.</p></div>
 <div class="journey-card"><div class="journey-symbol">01</div><div><h3>Tell us what you need</h3><p>Share your treatment interest, country, goals, preferred timing and any relevant medical information you are comfortable providing.</p></div></div>
 <div class="journey-card"><div class="journey-symbol">02</div><div><h3>Hospital and doctor matching</h3><p>Noor MedWell reviews your needs and identifies suitable hospitals, doctors and care pathways within its partner network. Clinical suitability is assessed by the medical providers.</p></div></div>
 <div class="journey-card"><div class="journey-symbol">03</div><div><h3>Travel and appointment coordination</h3><p>When agreed and available, the team helps coordinate appointments, travel timing, accommodation, interpretation, airport transfers and local logistics.</p></div></div>
 <div class="journey-card"><div class="journey-symbol">04</div><div><h3>Support and aftercare</h3><p>Noor MedWell helps with communication, follow-up arrangements and recovery-related coordination after treatment.</p></div></div>
 <p class="journey-note">Noor MedWell coordinates your medical journey; hospitals and licensed clinicians provide medical assessments, diagnoses and treatment. Specific services, costs and arrangements are confirmed individually.</p>
 <button class="journey-primary" type="button" data-start-trip-chat>Start planning my medical trip</button>`);
}
function openConsultPanel(){
 openJourney('Book Your Consultation',`<p class="journey-intro">Tell Noor MedWell what care you are exploring. We will help review your priorities and coordinate the next step with a suitable hospital or specialist from our partner network.</p>
 <div class="journey-highlight"><strong>How your enquiry works</strong><p>Choose a partner you would like to learn more about, or skip this section if you are not sure. Your interest will be passed to the AI concierge, which will guide you through the details one question at a time.</p></div>
 <h3 class="partner-picker-title">Explore our hospital partners</h3>
 <p class="partner-picker-intro">These healthcare groups are listed in Noor MedWell's partner network. Read a short introduction and tell us if one interests you. Noor MedWell remains your coordination contact.</p>
 <div class="partner-interest-list">
  <article class="partner-interest-card"><div class="partner-logo-wrap"><img src="https://images.seeklogo.com/logo-png/42/1/acibadem-logo-png_seeklogo-426990.png" alt="Acıbadem Healthcare Group logo" loading="lazy"></div><div class="partner-interest-copy"><h3>Acıbadem Healthcare Group</h3><p>A large, multi-specialty healthcare network founded in Istanbul. Its hospitals and clinics cover a broad range of medical fields and have dedicated international patient services.</p><button type="button" data-partner-interest="Acıbadem Healthcare Group">I'm interested in Acıbadem</button></div></article>
  <article class="partner-interest-card"><div class="partner-logo-wrap"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b7960c14366231.5628283cce606.jpg" alt="Liv Hospital logo" loading="lazy"></div><div class="partner-interest-copy"><h3>Liv Hospital</h3><p>A multi-hospital healthcare group operating in Turkey and Azerbaijan, with specialist physicians, modern medical technology and international patient coordination.</p><button type="button" data-partner-interest="Liv Hospital">I'm interested in Liv Hospital</button></div></article>
  <article class="partner-interest-card"><div class="partner-logo-wrap"><img src="https://www.doctify.com/_next/image?q=97&url=https%3A%2F%2Fwww.doctify.com%2Fpublic%2Fimages%2Fathena-uk%2Fpractice%2Flogo%2Fhealthshare-clinic-winchester%2Fhealthshare-clinic-winchesterc4627d80-fad6-4c65-8f7f-41b2e62feade.png&w=384" alt="Medicana Health Group logo" loading="lazy"></div><div class="partner-interest-copy"><h3>Medicana Health Group</h3><p>A healthcare group with hospitals in several Turkish cities and abroad. Its listed specialties include oncology, organ transplantation, neurosurgery, IVF, cardiovascular care and orthopaedics.</p><button type="button" data-partner-interest="Medicana Health Group">I'm interested in Medicana</button></div></article>
  <article class="partner-interest-card"><div class="partner-logo-wrap"><img src="https://yazangroup.co/img/partners/Memorial-Hospitals-Group.png" alt="Memorial Hospitals Group logo" loading="lazy"></div><div class="partner-interest-copy"><h3>Memorial Hospitals Group</h3><p>A Turkish hospital network with a broad range of departments and international patient services. Its clinical focus includes organ transplantation, cardiovascular care, oncology and IVF.</p><button type="button" data-partner-interest="Memorial Hospitals Group">I'm interested in Memorial</button></div></article>
  <article class="partner-interest-card"><div class="partner-logo-wrap"><img src="https://cdn.theorg.com/ef69dde8-6b7f-4785-92ca-f8acffd6500f_medium.jpg" alt="Hisar Hospital Intercontinental logo" loading="lazy"></div><div class="partner-interest-copy"><h3>Hisar Hospital Intercontinental</h3><p>An Istanbul hospital with JCI accreditation and multidisciplinary specialist services, including oncology, robotic and cardiac surgery, urology and eye care.</p><button type="button" data-partner-interest="Hisar Hospital Intercontinental">I'm interested in Hisar Hospital</button></div></article>
 </div>
 <p class="journey-note">The summaries are general introductions, not medical recommendations. A hospital's services, accreditation status, specialist availability and suitability must be confirmed for your individual case. Noor MedWell coordinates the enquiry; the hospital's licensed clinicians make medical decisions.</p>
 <div class="journey-highlight"><strong>Prefer to start without choosing a partner?</strong><p>No problem. Tell us about your treatment needs and Noor MedWell can help explore suitable options.</p></div>
 <button class="journey-primary" type="button" data-start-consult-chat>Continue without choosing a partner</button>`);
}
function openSupportPanel(){
 openJourney('24/7 Patient Assistance',`<p class="journey-intro">You can ask the Noor MedWell AI concierge questions at any time, day or night. It can explain the medical tourism process, help you understand the next steps and organise your questions for the coordination team.</p>
 <div class="journey-card"><div class="journey-symbol">◎</div><div><h3>Help whenever you need it</h3><p>Get guidance about treatments listed by Noor MedWell, the consultation process, hospital matching and preparing for a medical trip.</p></div></div>
 <div class="journey-card"><div class="journey-symbol">↗</div><div><h3>Human team follow-up</h3><p>If your question needs a coordinator, the assistant can prepare a summary for follow-up. Human response times depend on the team's working hours and availability.</p></div></div>
 <div class="journey-card"><div class="journey-symbol">+</div><div><h3>Medical and emergency boundaries</h3><p>The AI assistant does not diagnose, prescribe or replace a doctor. For urgent or life-threatening symptoms, contact local emergency services immediately.</p></div></div>
 <button class="journey-primary" type="button" data-start-support-chat>Chat with patient assistance</button>`);
}
document.querySelectorAll('.quick-card').forEach(b=>b.addEventListener('click',()=>{
 const action=b.dataset.action;
 if(action==='consult'){openConsultPanel();return;}
 if(action==='trip'){startGuidedFlow('trip');sendMessage();return;}
 if(action==='support'){return;}
 if(action==='treatments'){
  closeJourney();$('concierge').scrollIntoView({behavior:'smooth',block:'start'});
  const cards=[['♡','Checkup Programs','Health screening and preventive-care programmes.'],['✧','Plastic Surgery & Cosmetology','Aesthetic and reconstructive pathways, including rhinoplasty.'],['✦','Hair Transplant','Hair restoration options may include FUE, DHI and Sapphire techniques.'],['❋','Stem Cell Therapy','Regenerative-medicine services; evidence and suitability vary.'],['☼','Rejuvenation','Medical and aesthetic options focused on skin health.']];
  const row=document.createElement('div');row.className='message assistant';
  const av=document.createElement('div');av.className='message-avatar';av.textContent='N';row.append(av);
  const bubble=document.createElement('div');bubble.className='bubble treatment-bubble';
  bubble.innerHTML='<p>Explore treatment areas Noor MedWell can help coordinate. Swipe sideways to view the cards, then tap one to discuss it with me.</p><div class="treatment-carousel">'+cards.map(c=>'<button class="treatment-chat-card" type="button" data-treatment="'+c[1]+'"><span>'+c[0]+'</span><strong>'+c[1]+'</strong><small>'+c[2]+'</small><em>Explore →</em></button>').join('')+'</div><small class="treatment-disclaimer">Treatment suitability must be assessed by a licensed clinician.</small>';
  row.append(bubble);$('messages').append(row);$('messages').scrollTop=$('messages').scrollHeight;return;
 }
}));
journeyContent.addEventListener('click',e=>{
 const partner=e.target.closest('[data-partner-interest]')?.dataset.partnerInterest;
 if(partner){
  closeJourney();
  $('concierge').scrollIntoView({behavior:'smooth',block:'start'});
  const interestId=crypto.randomUUID();
  (async()=>{
   let saved=false;
   try{
    const result=await fetch('/api/partner-interest',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:interestId,partner,language:languages.find(x=>x[0]===selectedLanguage)?.[2]||'English'})});
    const data=await result.json();saved=!!(result.ok&&data.saved);
   }catch{}
   toast(saved?'Your interest in '+partner+' has been recorded.':'The assistant can note your interest in this chat, but company lead storage is not connected yet.');
   $('messageInput').value="A visitor has selected this Noor MedWell partner: "+partner+". "+(saved?"The selected partner interest has been recorded for the Noor MedWell team. ":"The partner interest could not be saved to the company lead database, so do not claim it has been recorded for staff. ")+ "Please acknowledge the visitor's interest and explain that Noor MedWell coordinates the enquiry and helps assess whether this provider may fit their needs. Ask one question at a time to collect: (1) the treatment or medical service they are exploring, (2) country of residence, (3) brief non-sensitive summary of what they need, (4) preferred timing, (5) full name, and (6) preferred contact method and contact details. Ask permission before collecting or sharing personal information. Do not ask for detailed medical records or sensitive health documents in this chat. Do not promise provider availability, clinical suitability, prices or appointments. At the end, summarize the selected partner and enquiry details. Do not claim that the patient's contact details or full enquiry have been sent to staff; only the partner-interest record is saved if the API confirms it.";
   sendMessage();
  })();
  return;
 }
 
 if(e.target.closest('[data-start-consult-chat]')){startGuidedFlow('consult');return;}
 
 const treatment=e.target.closest('[data-treatment]')?.dataset.treatment;
 if(treatment){$('messageInput').value="I would like to learn about Noor MedWell's "+treatment+" pathway. Please explain what it generally involves, what questions I should ask a licensed specialist, possible risks and recovery considerations, and what information the coordination team needs to help me explore suitable providers. Please ask me one question at a time and do not diagnose or decide my suitability."; sendMessage();}
});
document.querySelectorAll('.mobile-menu [data-open-journey]').forEach(b=>b.addEventListener('click',()=>{
 $('mobileMenu').hidden=true;
 if(b.dataset.openJourney==='trip'){startGuidedFlow('trip');sendMessage();}
 else if(b.dataset.openJourney==='treatments')document.querySelector('[data-action="treatments"]').click();
 
}));
$('messages').addEventListener('click',e=>{
 const treatment=e.target.closest('[data-treatment]')?.dataset.treatment;
 if(!treatment)return;
 $('messageInput').value="I would like to learn about Noor MedWell's "+treatment+" pathway. Please explain it clearly, including questions to discuss with a licensed specialist and relevant risks or recovery considerations. Ask me one question at a time. Do not diagnose or decide my suitability.";
 sendMessage();
});
function renderMessage(role,text){
 const row=document.createElement('div');row.className='message '+role;
 if(role==='assistant'){const av=document.createElement('div');av.className='message-avatar';av.textContent='N';row.append(av);}
 const bubble=document.createElement('div');bubble.className='bubble';bubble.textContent=text;row.append(bubble);$('messages').append(row);$('messages').scrollTop=$('messages').scrollHeight;
}
function setBusy(value){busy=value;$('sendButton').disabled=value;$('sendButton').textContent=value?'…':'➤';}
async function sendMessage(){
 const text=$('messageInput').value.trim();if(!text||busy)return;
 if(attachment){toast('Image preview is local only in this version. Please remove it before sending text, or contact the care team to share medical records securely.');return;}
 messages.push({role:'user',content:text});renderMessage('user',text);$('messageInput').value='';setBusy(true);
 const typing=document.createElement('div');typing.className='message assistant typing';typing.innerHTML='<div class="message-avatar">N</div><div class="bubble">Preparing your response…</div>';$('messages').append(typing);
 try{
  const response=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages,language:languages.find(x=>x[0]===selectedLanguage)?.[2]||'English'})});
  const data=await response.json();typing.remove();
  if(!response.ok){
   let detail=data.error||'The concierge is temporarily unavailable.';
   if(data.configured){
    detail+='\\nCloudflare runtime checks: API key '+(data.configured.apiKey?'available':'MISSING')+
      ', base URL '+(data.configured.baseUrl?'available':'MISSING')+
      ', model '+(data.configured.model?'available':'MISSING')+'.';
   }
   if(data.providerStatus)detail+='\\nGroq HTTP status: '+data.providerStatus+'.';
   if(data.providerMessage)detail+='\\nProvider detail: '+data.providerMessage;
   if(data.detail)detail+='\\nConnection detail: '+data.detail;
   throw new Error(detail);
  }
  messages.push({role:'assistant',content:data.reply});renderMessage('assistant',data.reply);
 }catch(err){typing.remove();renderMessage('assistant',err.message||'I could not connect just now. Please try again or contact our team through WhatsApp.');}
 finally{setBusy(false);}
}
$('sendButton').addEventListener('click',sendMessage);
$('messageInput').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}});
$('clearChat').addEventListener('click',()=>{messages=[];$('messages').innerHTML='<div class="message assistant"><div class="message-avatar">N</div><div class="bubble">Welcome back. How may I help with your medical journey?</div></div>';});
$('imageInput').addEventListener('change',e=>{
 const file=e.target.files?.[0];if(!file)return;
 if(!['image/png','image/jpeg','image/webp'].includes(file.type)){toast('Please choose a JPG, PNG or WebP image.');e.target.value='';return;}
 if(file.size>8*1024*1024){toast('Please choose an image smaller than 8 MB.');e.target.value='';return;}
 attachment=file;const url=URL.createObjectURL(file);
 $('attachmentPreview').hidden=false;$('attachmentPreview').innerHTML='';
 const img=document.createElement('img');img.src=url;img.alt='Selected attachment preview';
 const info=document.createElement('span');info.textContent=file.name+' · '+(file.size/1024/1024).toFixed(1)+' MB';
 const del=document.createElement('button');del.textContent='×';del.setAttribute('aria-label','Remove image');del.addEventListener('click',()=>{URL.revokeObjectURL(url);attachment=null;$('imageInput').value='';$('attachmentPreview').hidden=true;$('attachmentPreview').innerHTML='';});
 $('attachmentPreview').append(img,info,del);
 toast('Image preview added. It stays on this device and is not uploaded or sent in this version.');
});
