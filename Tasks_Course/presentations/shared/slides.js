(() => {
  'use strict';
  const deck=window.DECK,stage=document.querySelector('.stage');
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const mainCount=deck.slides.filter(s=>!s.appendix).length,appendixCount=deck.slides.length-mainCount;
  let mainNumber=0,appendixNumber=0;
  const pagination=deck.slides.map(s=>{
    const position=s.appendix?++appendixNumber:++mainNumber;
    const total=s.appendix?appendixCount:mainCount;
    const shortLabel=`${s.appendix?'Appendix ':''}${position}`;
    return {position,total,shortLabel,label:`${shortLabel} / ${total}`};
  });
  deck.slides.forEach((s,i)=>{const el=document.createElement('section');el.className='slide '+(s.class||'')+(s.appendix?' appendix-slide':'');el.id=s.id||'s'+(i+1);el.setAttribute('aria-label',`${pagination[i].shortLabel}: ${s.title}`);el.innerHTML=`<h1>${s.titleHtml||s.title}</h1><div class="body">${s.html}</div><div class="source">${s.source||''}</div><div class="number">${pagination[i].label}</div><aside class="note-inline"><strong>Instructor notes (${s.minutes||0} minutes)</strong><p>${esc(s.notes||'')}</p></aside>`;stage.append(el)});
  const slides=[...document.querySelectorAll('.slide')];let idx=0,step=0;
  const byHash=()=>{const id=location.hash.slice(1);const n=slides.findIndex(s=>s.id===id);return n>=0?n:0};idx=byHash();
  function fit(){if(document.body.classList.contains('reading'))return;const k=Math.min(innerWidth/1280,(innerHeight-44)/720);slides.forEach(s=>s.style.transform=`scale(${k})`)}
  function draw(hash=true){slides.forEach((s,i)=>{s.classList.toggle('active',i===idx);s.setAttribute('aria-hidden',(i===idx||document.body.classList.contains('reading'))?'false':'true');s.querySelectorAll('.reveal').forEach((r,j)=>r.classList.toggle('shown',i===idx&&j<step))});const page=pagination[idx];document.querySelector('#counter').textContent=page.label;document.querySelector('.progress').style.width=`${100*page.position/page.total}%`;document.title=deck.title+' — '+page.label;if(hash)history.replaceState(null,'','#'+slides[idx].id);fit();}
  function next(){const n=slides[idx].querySelectorAll('.reveal').length;if(step<n)step++;else if(idx<slides.length-1){idx++;step=0}draw()}
  function prev(){if(step>0)step--;else if(idx>0){idx--;step=slides[idx].querySelectorAll('.reveal').length}draw()}
  document.querySelector('#next').onclick=next;document.querySelector('#prev').onclick=prev;
  document.querySelector('#notes').hidden=!!deck.hideNotes;
  document.querySelector('#notes').onclick=()=>{if(deck.hideNotes)return;const s=deck.slides[idx];document.querySelector('#notes-title').textContent=s.title;document.querySelector('#notes-body').textContent=`Planned time: ${s.minutes||0} minutes\n\n${s.notes||''}`;document.querySelector('#notes-dialog').showModal()};
  document.querySelector('#outline').onclick=()=>document.querySelector('#toc-dialog').showModal();
  document.querySelector('#toc-list').innerHTML=deck.slides.map((s,i)=>`<button data-slide="${i}">${pagination[i].shortLabel}. ${esc(s.appendix?s.title.replace(/^Appendix:\s*/i,''):s.title)}</button>`).join('');
  document.querySelector('#toc-list').onclick=e=>{const b=e.target.closest('button');if(b){idx=Number(b.dataset.slide);step=0;draw();document.querySelector('#toc-dialog').close()}};
  document.querySelector('#reading').onclick=()=>{document.body.classList.toggle('reading');document.querySelector('#reading').textContent=document.body.classList.contains('reading')?'Slides':'Read all';draw(false);fit()};
  document.querySelector('#fullscreen').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen();else document.documentElement.requestFullscreen()};
  document.querySelector('#print').onclick=()=>window.print();
  document.querySelectorAll('dialog .close').forEach(b=>b.onclick=()=>b.closest('dialog').close());
  document.addEventListener('keydown',e=>{if(e.target.closest('input,select,textarea,button')||document.querySelector('dialog[open]'))return;if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();next()}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();prev()}if(e.key==='Home'){idx=0;step=0;draw()}if(e.key==='End'){idx=slides.length-1;step=99;draw()}if(e.key.toLowerCase()==='n')document.querySelector('#notes').click();if(e.key.toLowerCase()==='f')document.querySelector('#fullscreen').click();if(e.key.toLowerCase()==='o')document.querySelector('#outline').click()});
  addEventListener('resize',fit);addEventListener('hashchange',()=>{idx=byHash();step=0;draw(false)});
  document.querySelectorAll('[data-live-url]').forEach(b=>b.onclick=()=>{const box=b.closest('.resource');const frame=document.createElement('iframe');frame.src=b.dataset.liveUrl;frame.title=b.dataset.liveTitle||'Public data resource';frame.loading='lazy';frame.referrerPolicy='no-referrer';frame.setAttribute('sandbox','allow-scripts allow-same-origin allow-popups');box.querySelector('.live-frame').replaceChildren(frame);box.querySelector('.local-walkthrough')?.setAttribute('hidden','');b.disabled=true;b.textContent='Live page loaded'});
  const zoom=document.createElement('dialog');zoom.className='figure-zoom';zoom.innerHTML='<button type="button">Close</button><img alt=""><p></p>';document.body.append(zoom);zoom.querySelector('button').onclick=()=>zoom.close();
  document.querySelectorAll('.slide figure img').forEach(im=>{im.tabIndex=0;im.setAttribute('role','button');im.title='Enlarge figure';const show=()=>{zoom.querySelector('img').src=im.src;zoom.querySelector('img').alt=im.alt;zoom.querySelector('p').textContent=im.closest('figure').querySelector('figcaption')?.textContent||im.alt;zoom.showModal()};im.onclick=show;im.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();show()}}});
  if(deck.hideNotes)document.querySelectorAll('.note-inline').forEach(el=>el.remove());
  if(window.initWidgets)window.initWidgets();draw();
  if(window.MathJax?.startup)window.MathJax.startup.promise.then(()=>window.MathJax.typesetPromise([stage])).then(()=>{document.documentElement.dataset.mathReady='true';fit()});else document.documentElement.dataset.mathReady='unavailable';
  window.slidePlayer={go:(i)=>{idx=Math.max(0,Math.min(i,slides.length-1));step=99;draw()},count:slides.length};
})();
