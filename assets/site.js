const menu=document.querySelector('.menu-toggle');
menu?.addEventListener('click',()=>{const nav=document.querySelector('#main-nav');const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
const safe=s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const v=(fd,key)=>String(fd.get(key)||'').trim();
const calculator=document.querySelector('#calculator');
calculator?.addEventListener('submit',e=>{
  e.preventDefault();const fd=new FormData(calculator), box=document.querySelector('#calculator-results');
  const zip=v(fd,'zip'), area=Number(v(fd,'roofArea')), house=Number(v(fd,'houseArea'));
  const notes=[];
  if(!area)notes.push(house?'House size is not roof area: request a measured roof surface from each contractor.':'Ask contractors for a measured roof surface area.');
  if(v(fd,'pitch')==='complex'||v(fd,'stories')==='3+')notes.push('Steep/complex roof or additional stories may change labor and access.');
  if(['Hail damage','Wind damage','Visible damage','Leak'].includes(v(fd,'condition')))notes.push('Document damage safely and ask for written findings before assuming replacement is necessary.');
  if(v(fd,'insurance').includes('Claim'))notes.push('Ask your insurer about coverage, your deductible and how the policy settles roof damage.');
  notes.push('Ask each roofer to itemize tear-off, decking changes, ventilation, flashing, disposal, permits and warranties.');
  const quotes=['quoteA','quoteB','quoteC'].map(k=>Number(v(fd,k))).filter(n=>Number.isFinite(n)&&n>0&&n<=1000000);
  const range=quotes.length>=2?`<p class="range">${Math.min(...quotes).toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0})}–${Math.max(...quotes).toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0})}</p><p>Range of the ${quotes.length} quotes you entered. This is not a Dallas average or a new estimate. Check scope before comparing totals.</p>`:`<p><strong>Dollar range unavailable.</strong> We do not have a verified local pricing dataset. Enter two or more actual bids above to summarize your own range.</p>`;
  const areaLine=area?`${area.toLocaleString()} sq ft stated roof area`:house?`${house.toLocaleString()} sq ft stated house area (roof area unmeasured)`:'Roof area not supplied';
  box.innerHTML=`<span class="eyebrow">YOUR PROJECT BRIEF</span><h2>A clearer scope for your estimates</h2>${range}<p><strong>Property:</strong> ${safe(zip||'ZIP not supplied')} · ${safe(areaLine)} · ${safe(v(fd,'stories'))} stories · ${safe(v(fd,'pitch'))} pitch/complexity</p><p><strong>Roof:</strong> current ${safe(v(fd,'current'))}; preferred ${safe(v(fd,'desired'))}; condition ${safe(v(fd,'condition'))}.</p><p><strong>Insurance:</strong> ${safe(v(fd,'insurance'))}.</p><h3>Questions to take to a roofer</h3><ul>${notes.map(n=>`<li>${safe(n)}</li>`).join('')}</ul><p>Installation duration needs an on-site scope and contractor schedule; we cannot estimate it responsibly from these inputs.</p><a class="button dark" href="/get-quotes/">Prepare a request →</a>`;
  box.hidden=false;box.scrollIntoView({behavior:'smooth',block:'start'});
});
const storm=document.querySelector('#storm-form');
storm?.addEventListener('submit',e=>{
  e.preventDefault();const fd=new FormData(storm),box=document.querySelector('#storm-results');
  const urgent=v(fd,'leak')==='Yes'||v(fd,'emergency')==='Yes';
  const notes=[urgent?'Active water entry or emergency protection was indicated. Contact a qualified local roofing professional promptly; avoid any unsafe work.':'Record safe ground-level photos and note where you see possible damage.', 'Request a property-specific inspection with dated photos and repair/replacement options.','Review your own policy and deductible with your insurer before drawing coverage conclusions.'];
  box.innerHTML=`<span class="eyebrow">PREPARATION SUMMARY</span><h2>${urgent?'Prioritize property safety':'Plan an inspection'}</h2><p>This checklist is not a professional diagnosis and cannot determine insurance coverage.</p><p><strong>Details:</strong> ZIP ${safe(v(fd,'zip')||'not supplied')} · storm date ${safe(v(fd,'date')||'unknown')} · leak ${safe(v(fd,'leak'))} · visible damage ${safe(v(fd,'visible'))} · missing shingles ${safe(v(fd,'shingles'))} · age ${safe(v(fd,'age')||'unknown')} · claim ${safe(v(fd,'claim'))}.</p><ul>${notes.map(n=>`<li>${safe(n)}</li>`).join('')}</ul><a class="button dark" href="/roof-hail-damage-inspection/">Prepare for inspection →</a>`;box.hidden=false;box.scrollIntoView({behavior:'smooth'});
});
const lead=document.querySelector('#lead-form');
lead?.addEventListener('submit',async e=>{
  e.preventDefault();const status=document.querySelector('#lead-status'),button=lead.querySelector('button[type=submit]');
  if(!lead.reportValidity())return;
  const fd=new FormData(lead);button.disabled=true;status.className='status';status.textContent='Checking request delivery…';
  try{const response=await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(fd))});
    if(!response.ok)throw new Error(response.status===503?'Request delivery is not yet active. Please save your project brief and contact a local roofer directly.':'We could not deliver your request. Please try again later or contact a roofer directly.');
    status.className='status success';status.textContent='Your request was accepted by the receiving service. Please keep a copy of your project details.';lead.reset();
  }catch(err){status.className='status error';status.textContent=err.message||'Request delivery failed.';}finally{button.disabled=false;}
});
