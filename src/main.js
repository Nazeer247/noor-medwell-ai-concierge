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
  ['▦','Book Consultation','I would like to book a consultation.'],
  ['✚','Find Hospitals','Help me explore suitable hospitals in Turkey.'],
  ['⚕','Explore Treatments','I would like to learn about treatment options.'],
  ['◉','Patient Support','I need help with my medical journey.']
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
    ${quickActions.map((a,i)=>`<button class="quick-card" data-prompt="${a[2]}"><span class="quick-icon">${a[0]}</span><span>${a[1]}</span><b>›</b></button>`).join('')}
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
function selectLanguage(code){
  const lang=languages.find(x=>x[0]===code);if(!lang)return;
  selectedLanguage=code;$('currentLanguage').textContent=code.toUpperCase();
  document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('selected',b.dataset.lang===code));
  $('languageMenu').hidden=true;$('languageTrigger').setAttribute('aria-expanded','false');
  $('messageInput').placeholder=code==='tr'?'Hastaneler, tedaviler veya sağlık yolculuğunuz hakkında sorun...':code==='de'?'Fragen Sie nach Kliniken, Behandlungen oder Ihrer medizinischen Reise...':code==='fr'?'Posez vos questions sur les hôpitaux, les traitements ou votre parcours médical...':'Ask about hospitals, treatments or your medical journey...';
  toast('Language selected: '+lang[2]+'. The concierge will reply in your chosen language.');
}
$('languageTrigger').addEventListener('click',()=>{const m=$('languageMenu');m.hidden=!m.hidden;$('languageTrigger').setAttribute('aria-expanded',String(!m.hidden));});
$('moreLanguages').addEventListener('click',()=>{$('languageMenu').hidden=false;$('languageTrigger').setAttribute('aria-expanded','true');$('languageMenu').scrollIntoView({block:'nearest'});});
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>selectLanguage(b.dataset.lang)));
document.addEventListener('click',e=>{if(!e.target.closest('.language-wrap')&&!e.target.closest('#moreLanguages')){$('languageMenu').hidden=true;$('languageTrigger').setAttribute('aria-expanded','false');}});
$('menuButton').addEventListener('click',()=>{$('mobileMenu').hidden=!$('mobileMenu').hidden;});
document.querySelectorAll('.mobile-menu [data-scroll]').forEach(b=>b.addEventListener('click',()=>{$('concierge').scrollIntoView({behavior:'smooth'});$('mobileMenu').hidden=true;}));
document.querySelectorAll('.quick-card').forEach(b=>b.addEventListener('click',()=>{ $('messageInput').value=b.dataset.prompt; $('messageInput').focus(); $('concierge').scrollIntoView({behavior:'smooth',block:'center'}); }));

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
