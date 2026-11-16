(function(){
  const init=()=>{
    const picker=document.querySelector('.language-picker');
    const select=document.getElementById('languageSelect');
    if(!picker||!select||picker.dataset.pillsReady==='true')return;
    picker.dataset.pillsReady='true';
    picker.classList.add('language-picker-enhanced');
    picker.setAttribute('aria-label','Seleccionar idioma / Select language / Seleziona lingua');

    const group=document.createElement('div');
    group.className='language-pills';
    group.setAttribute('role','group');
    group.setAttribute('aria-label','Seleccionar idioma');
    [['es','ES'],['en','EN'],['it','IT']].forEach(([code,label])=>{
      const button=document.createElement('button');
      button.type='button';
      button.className='language-pill';
      button.dataset.lang=code;
      button.textContent=label;
      button.setAttribute('aria-pressed','false');
      button.addEventListener('click',()=>{
        if (select) {
          select.value = code;
          select.dispatchEvent(new Event('change',{bubbles:true}));
        }
        if (window.setLanguage) window.setLanguage(code);
      });
      group.appendChild(button);
    });

    picker.appendChild(group);
    const sync=()=>{
      const current = ['es','en','it'].includes(select.value) ? select.value : 'es';
      group.querySelectorAll('.language-pill').forEach((button)=>{
        const active = button.dataset.lang === current;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
    };

    select.addEventListener('change', sync);
    if (window.setLanguage) {
      const current = select.value || 'es';
      window.setLanguage(current);
    }
    sync();
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();
