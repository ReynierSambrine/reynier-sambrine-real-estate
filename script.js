(function(){
  function load(src,onload){const script=document.createElement('script');script.src=src;if(onload)script.onload=onload;document.body.appendChild(script);return script;}
  const initEnhancements=()=>{
    load('mortgage-calculator.js',()=>load('contact-links.js'));
    load('service-areas.js',()=>{
      const languageSelect=document.getElementById('languageSelect');
      if(languageSelect)languageSelect.dispatchEvent(new Event('change',{bubbles:true}));
    });
    load('language-switcher.js');
    if(!document.querySelector('link[data-language-switcher-styles]')){
      const styles=document.createElement('link');
      styles.rel='stylesheet';
      styles.href='language-switcher.css';
      styles.dataset.languageSwitcherStyles='true';
      document.head.appendChild(styles);
    }
    window.setTimeout(()=>{if(!document.querySelector('.contact-social-list'))load('contact-links.js');},2500);
  };
  const boot=()=>{
    const legacy=document.createElement('script');
    legacy.src='https://raw.githubusercontent.com/ReynierSambrine/reynier-sambrine-real-estate/c7884face4ddb0c905c6793fcb898018776f2a8c/script.js?cache=20261114-contact';
    legacy.onload=initEnhancements;
    legacy.onerror=initEnhancements;
    document.body.appendChild(legacy);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
