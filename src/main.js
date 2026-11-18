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
  ['▦','Book Consultation','consult'],
  ['✚','Find Hospitals','hospitals'],
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
      <p>Get instant help with our services,<br class="desktop-break"> appointments, and more.</p>
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
      <div class="message assistant"><div class="message-avatar">N</div><div class="bubble">Welcome to Noor MedWell. I can help you explore hospitals, treatments and the next steps in your medical journey. Which country are you contacting us from, and what support do you need?</div></div>
    </div>
    <div class="attachment-preview" id="attachmentPreview" hidden></div>
    <div class="composer">
      <label class="attach-button" for="imageInput" title="Attach a medical image" aria-label="Attach an image"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"></rect><circle cx="8.5" cy="9" r="1.5"></circle><path d="m21 15-5-5L5 20"></path></svg><input id="imageInput" type="file" accept="image/png,image/jpeg,image/webp" hidden></label>
      <textarea id="messageInput" rows="1" placeholder="Ask about hospitals, treatments or your medical journey..." aria-label="Write a message"></textarea>
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
<div class="mobile-menu" id="mobileMenu" hidden><button data-scroll="concierge">Talk to Concierge</button><a href="https://www.noormedwell.com/clinics" target="_blank" rel="noreferrer">Explore Hospitals</a><a href="https://www.noormedwell.com/treatments" target="_blank" rel="noreferrer">Treatments</a><a href="https://wa.me/905428440488" target="_blank" rel="noreferrer">WhatsApp Concierge</a></div>
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
  consult:"I'd like to request a consultation. Please guide me step by step. Ask me one question at a time about my treatment needs, country, preferred hospital or specialist, medical history or reports (if relevant), travel timing, and contact details. At the end, prepare a clear consultation summary for Noor MedWell's human team. Do not claim it has been sent unless the system confirms submission.",
  support:"I need patient assistance. Please help me now, even if the office is closed. Ask what I need help with, explain Noor MedWell's process and next steps, and prepare anything that needs a human coordinator for follow-up during office hours. For emergencies, direct me to local emergency services.",
  hospital:"Help me find a suitable hospital in Turkey. Ask which city or treatment I need, then help me compare Noor MedWell's listed partner hospitals and show their locations on the map."
 };
 $('messageInput').value=prompts[kind]||prompts.support;$('messageInput').focus();
};
document.querySelectorAll('.quick-card').forEach(b=>b.addEventListener('click',()=>{
 const action=b.dataset.action;
 if(action==='consult'){startGuidedFlow('consult');return;}
 if(action==='support'){startGuidedFlow('support');return;}
 if(action==='hospitals'){
  openJourney('Find a partner hospital',`<p class="journey-intro">Explore Noor MedWell's listed partner hospitals in Istanbul. Choose a hospital to view its location in Google Maps.</p>
  <article class="journey-card"><img src="https://res.cloudinary.com/dwclhxhfb/image/upload/v1/media/clinics/featured/2026/04/acibadem-hospital_featured_mu23ng" alt="Acıbadem Hospital"><div><h3>Acıbadem Hospital</h3><p>Istanbul, Türkiye · Multi-specialty care, oncology, organ transplantation and robotic surgery.</p><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Acibadem+Hospital+Istanbul+Turkey">View on Google Maps ↗</a></div></article>
  <article class="journey-card"><img src="https://res.cloudinary.com/dwclhxhfb/image/upload/v1/media/clinics/featured/2026/04/liv-hospital_featured_fmqnbl" alt="Liv Hospital"><div><h3>Liv Hospital</h3><p>Istanbul, Türkiye · Robotic surgery, organ transplantation, oncology and international patient services.</p><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Liv+Hospital+Istanbul+Turkey">View on Google Maps ↗</a></div></article>
  <article class="journey-card"><img src="https://res.cloudinary.com/dwclhxhfb/image/upload/v1/media/clinics/featured/2026/04/medicana-international_featured_rqbspl" alt="Medicana International"><div><h3>Medicana International</h3><p>Istanbul, Türkiye · Broad medical services, fertility, plastic surgery and rehabilitation.</p><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Medicana+International+Istanbul+Turkey">View on Google Maps ↗</a></div></article>
  <article class="journey-card"><img src="https://res.cloudinary.com/dwclhxhfb/image/upload/v1/media/clinics/featured/2026/04/memorial-hospital_featured_odyl4n" alt="Memorial Hospital"><div><h3>Memorial Hospital</h3><p>Istanbul, Türkiye · Organ transplantation, cardiac surgery and oncology.</p><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Memorial+Hospital+Istanbul+Turkey">View on Google Maps ↗</a></div></article>
  <article class="journey-card"><img src="https://res.cloudinary.com/dwclhxhfb/image/upload/v1/media/clinics/featured/2026/04/hisar-hospital_featured_s2ayuj" alt="Hisar Hospital"><div><h3>Hisar Hospital</h3><p>Istanbul, Türkiye · Diagnostics, cardiac care, orthopedics and women's health.</p><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Hisar+Hospital+Istanbul+Turkey">View on Google Maps ↗</a></div></article>
  <button class="journey-primary" type="button" data-start-hospital-chat>Help me choose a hospital</button>`);
  return;
 }
 if(action==='treatments'){
  openJourney('Explore treatments',`<p class="journey-intro">Browse Noor MedWell's treatment pathways. Select a category to learn what it covers, then ask the AI concierge about your goals and next steps.</p>
  <article class="journey-card"><div class="journey-symbol">♡</div><div><h3>Checkup Programs</h3><p>Comprehensive health screening and preventive care packages designed to detect health issues early and support wellness.</p><button type="button" data-treatment="Checkup Programs">Explore this category →</button></div></article>
  <article class="journey-card"><div class="journey-symbol">✧</div><div><h3>Plastic Surgery & Cosmetology</h3><p>Aesthetic procedures and cosmetic surgery options. Examples include rhinoplasty (nose surgery).</p><a href="https://www.noormedwell.com/treatments/plastic-surgery-cosmetology/rhinoplasty-nose-surgery/" target="_blank" rel="noreferrer">Rhinoplasty details ↗</a><button type="button" data-treatment="Plastic Surgery & Cosmetology">Ask about this category →</button></div></article>
  <article class="journey-card"><div class="journey-symbol">✦</div><div><h3>Hair Transplant</h3><p>Hair restoration options including FUE, DHI and Sapphire methods.</p><a href="https://www.noormedwell.com/treatments/hair-transplant/dhi-hair-transplant/" target="_blank" rel="noreferrer">DHI Hair Transplant details ↗</a><button type="button" data-treatment="Hair Transplant">Ask about this category →</button></div></article>
  <article class="journey-card"><div class="journey-symbol">❋</div><div><h3>Stem Cell Therapy</h3><p>A regenerative medicine category. Specific applications and suitability require specialist assessment.</p><button type="button" data-treatment="Stem Cell Therapy">Ask about this category →</button></div></article>
  <article class="journey-card"><div class="journey-symbol">☼</div><div><h3>Rejuvenation</h3><p>Anti-aging and rejuvenation treatment pathways. Available options depend on clinical assessment.</p><button type="button" data-treatment="Rejuvenation">Ask about this category →</button></div></article>`);
 }
}));
journeyContent.addEventListener('click',e=>{
 const treatment=e.target.closest('[data-treatment]')?.dataset.treatment;
 if(treatment){closeJourney();$('concierge').scrollIntoView({behavior:'smooth',block:'start'});$('messageInput').value="Please explain Noor MedWell's "+treatment+" options, what they generally involve, who may be assessed for them, possible risks and recovery considerations, and what information a consultant would need. Do not diagnose or decide my suitability."; $('messageInput').focus();}
 if(e.target.closest('[data-start-hospital-chat]'))startGuidedFlow('hospital');
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
  if(!response.ok)throw new Error(data.error||'The concierge is temporarily unavailable.');
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
