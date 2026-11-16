(function(){
  const translations={
    es:{
      announcement:'CENTRO Y SUR DE FLORIDA · SERVICIO PERSONALIZADO',
      navAbout:'Sobre mí', navProperties:'Propiedades', navBuySell:'Comprar y vender', navAreas:'Áreas de servicio', navContact:'Contacto',
      headerCta:'Hablemos',
      heroEyebrow:'UNA NUEVA FORMA DE LLEGAR A CASA',
      heroTitle:'Tu próximo capítulo\n<em>comienza aquí.</em>',
      heroExplore:'Explorar propiedades', heroContact:'Conversemos',
      aboutEyebrow:'CONOCE A TU ASESOR', aboutTitle:'Cada hogar tiene\nuna historia. <em>La tuya importa.</em>',
      aboutText:'Soy Reynier Sambrine, Real Estate Broker Associate en Key & Legacy Realty. Acompaño a compradores y vendedores en el centro y sur de Florida con comunicación clara, atención personal y una estrategia pensada para sus objetivos.',
      aboutText2:'Ya sea que estés buscando tu primera casa, una inversión o el próximo paso, estoy aquí para ayudarte a avanzar con confianza.',
      aboutLink:'Conoce el cómo puedo ayudarte',
      propertiesEyebrow:'OPORTUNIDADES SELECCIONADAS', propertiesTitle:'Espacios para <em>vivir bien.</em>',
      propertiesIntro:'Descubre opciones residenciales, terrenos e inversiones. Contamos con una selección de propiedades que responden a distintos estilos de vida y objetivos.',
      guideEyebrow:'ORIENTACIÓN PARA CADA PASO', guideTitle:'Comprar o vender, <em>con claridad.</em>',
      guideIntro:'Información útil y herramientas sencillas para ayudarte a tomar decisiones mejor informadas.',
      buyTips:'Consejos para compradores', sellerTips:'Consejos para vendedores',
      calcEyebrow:'PLANIFICA TU COMPRA', calcTitle:'Calculadora de hipoteca',
      homePrice:'Precio de la casa ($)', downPayment:'Pago inicial (%)', interestRate:'Tasa de interés anual (%)', loanTerm:'Plazo (años)', propertyTax:'Impuestos anuales (%)', annualInsurance:'Seguro anual ($)',
      estimatedPayment:'Pago mensual estimado', sendRequest:'Enviar solicitud', searchEyebrow:'TU PRÓXIMO HOGAR', searchTitle:'Cuéntame qué buscas',
      valuationTitle:'¿Cuánto vale tu propiedad?', valuationIntro:'Solicita una valoración inicial sin compromiso. Revisaremos los detalles y conversaremos sobre un análisis comparativo de mercado personalizado.',
      areasEyebrow:'RAÍCES LOCALES, ALCANCE AMPLIO', areasTitle:'Florida, <em>más cerca.</em>', areasText:'Te asesoramos en comunidad del centro y sur de Florida, con atención personal para cada zona y cuál se adapta mejor a ti.',
      areasLink:'Hablemos de dónde quieres vivir',
      contactEyebrow:'EMPECEMOS LA CONVERSACIÓN', contactTitle:'El siguiente paso puede ser <em>el tuyo.</em>',
      contactText:'Cuéntame tus planes. Estoy aquí para ayudarte a avanzar y a tomar la mejor decisión con confianza.',
      contactCta:'Escríbeme por WhatsApp',
      phoneLabel:'TÉLEFONO / WHATSAPP', emailLabel:'EMAIL',
      footerDisclaimer:'Broker Associate • Key & Legacy Realty • Centro y sur de Florida'
    },
    en:{
      announcement:'CENTRAL & SOUTH FLORIDA · PERSONALIZED SERVICE',
      navAbout:'About Me', navProperties:'Properties', navBuySell:'Buy & Sell', navAreas:'Areas Served', navContact:'Contact',
      headerCta:'Let’s talk',
      heroEyebrow:'A NEW WAY TO FIND HOME',
      heroTitle:'Your next chapter\n<em>starts here.</em>',
      heroExplore:'Explore properties', heroContact:'Let’s talk',
      aboutEyebrow:'MEET YOUR ADVISOR', aboutTitle:'Every home has\na story. <em>Yours matters.</em>',
      aboutText:'I am Reynier Sambrine, Real Estate Broker Associate at Key & Legacy Realty. I guide buyers and sellers across Central and South Florida with clear communication, attentive service, and strategy tailored to each client’s goals.',
      aboutText2:'Whether you are buying your first home, investing, or taking the next step, I am here to help you move forward with confidence.',
      aboutLink:'Let’s talk about your goals',
      propertiesEyebrow:'FEATURED OPPORTUNITIES', propertiesTitle:'Spaces to <em>live well.</em>',
      propertiesIntro:'Explore residential options, land, and investment opportunities. We curate a selection of properties that fit different lifestyles and goals.',
      guideEyebrow:'GUIDANCE AT EVERY STEP', guideTitle:'Buy or sell, <em>with clarity.</em>',
      guideIntro:'Helpful information and straightforward tools to support your decision-making journey.',
      buyTips:'Buyer guidance', sellerTips:'Seller guidance',
      calcEyebrow:'PLAN YOUR PURCHASE', calcTitle:'Mortgage calculator',
      homePrice:'Home price ($)', downPayment:'Down payment (%)', interestRate:'Annual interest rate (%)', loanTerm:'Loan term (years)', propertyTax:'Annual property tax (%)', annualInsurance:'Annual insurance ($)',
      estimatedPayment:'Estimated monthly payment', sendRequest:'Send request', searchEyebrow:'YOUR NEXT HOME', searchTitle:'Tell me what you are looking for',
      valuationTitle:'How much is your property worth?', valuationIntro:'Request an initial valuation without commitment. We will review your details and discuss a personalized market analysis.',
      areasEyebrow:'LOCAL ROOTS, BROAD REACH', areasTitle:'Florida, <em>closer to home.</em>', areasText:'We advise buyers and sellers across Central and South Florida, with local insight for each neighborhood and a strategy tailored to your goals.',
      areasLink:'Tell me where you want to live',
      contactEyebrow:'LET’S START THE CONVERSATION', contactTitle:'The next step could be <em>yours.</em>',
      contactText:'Tell me your plans. I will help you move forward and make the best decision with confidence.',
      contactCta:'Message on WhatsApp',
      phoneLabel:'PHONE / WHATSAPP', emailLabel:'EMAIL',
      footerDisclaimer:'Broker Associate • Key & Legacy Realty • Central and South Florida'
    },
    it:{
      announcement:'FLORIDA CENTRALE E MERIDIONALE · SERVIZIO PERSONALIZZATO',
      navAbout:'Chi sono', navProperties:'Immobili', navBuySell:'Comprare e vendere', navAreas:'Zone servite', navContact:'Contatti',
      headerCta:'Parliamone',
      heroEyebrow:'UN NUOVO MODALITÀ DI TROVARE CASA',
      heroTitle:'Il tuo prossimo capitolo\n<em>inizia qui.</em>',
      heroExplore:'Esplora proprietà', heroContact:'Parliamo',
      aboutEyebrow:'CONOSCI IL TUO CONSULENTE', aboutTitle:'Ogni casa ha\nuna storia. <em>La tua conta.</em>',
      aboutText:'Sono Reynier Sambrine, Real Estate Broker Associate presso Key & Legacy Realty. Accompagno acquirenti e venditori in Florida centrale e meridionale con comunicazione chiara, attenzione personalizzata e strategie su misura.',
      aboutText2:'Che si tratti della prima casa, di un investimento o del prossimo passo, sono qui per aiutarti a muoverti con sicurezza.',
      aboutLink:'Parliamone insieme',
      propertiesEyebrow:'OPPORTUNITÀ IN EVIDENZA', propertiesTitle:'Spazi per <em>vivere bene.</em>',
      propertiesIntro:'Esplora opzioni residenziali, terreni e opportunità di investimento. Selezioniamo proprietà in linea con diversi stili di vita e obiettivi.',
      guideEyebrow:'GUIDA IN OGNI FASE', guideTitle:'Comprare o vendere, <em>con chiarezza.</em>',
      guideIntro:'Informazioni utili e strumenti semplici per sostenerti nel processo decisionale.',
      buyTips:'Consigli per acquirenti', sellerTips:'Consigli per venditori',
      calcEyebrow:'PIANIFICA L’ACQUISTO', calcTitle:'Calcolatore mutuo',
      homePrice:'Prezzo casa (€)', downPayment:'Acconto (%)', interestRate:'Tasso di interesse annuo (%)', loanTerm:'Durata (anni)', propertyTax:'Tasse annuali (%)', annualInsurance:'Assicurazione annuale (€)',
      estimatedPayment:'Pagamento mensile stimato', sendRequest:'Invia richiesta', searchEyebrow:'LA TUA PROSSIMA CASA', searchTitle:'Dimmi cosa stai cercando',
      valuationTitle:'Quanto vale la tua proprietà?', valuationIntro:'Richiedi una valutazione iniziale senza impegno. Esamineremo i dettagli e discuteremo un’analisi di mercato personalizzata.',
      areasEyebrow:'RADICI LOCALI, PORTATA AMPIA', areasTitle:'Florida, <em>più vicina.</em>', areasText:'Ti assistiamo in varie comunità della Florida centrale e meridionale, con attenzione per ogni zona e una strategia su misura.',
      areasLink:'Parliamone',
      contactEyebrow:'INIZIAMO LA CONVERSAZIONE', contactTitle:'Il prossimo passo potrebbe essere <em>tuo.</em>',
      contactText:'Dimmi i tuoi piani. Ti aiuterò a fare la scelta migliore con sicurezza.',
      contactCta:'Scrivimi su WhatsApp',
      phoneLabel:'TELEFONO / WHATSAPP', emailLabel:'EMAIL',
      footerDisclaimer:'Broker Associate • Key & Legacy Realty • Florida centrale e meridionale'
    }
  };

  function setLanguage(lang){
    const selected = ['es','en','it'].includes(lang) ? lang : 'es';
    const dict = translations[selected] || translations.es;
    document.documentElement.lang = selected;
    localStorage.setItem('rs-language', selected);

    document.querySelectorAll('[data-i18n]').forEach((node)=>{
      const key = node.dataset.i18n;
      if (!dict[key]) return;
      if (node.matches('input, textarea')) {
        node.setAttribute('placeholder', dict[key]);
        if (!node.value || node.dataset.placeholderOnly === 'true') node.value = dict[key];
      } else {
        node.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('.language-pill').forEach((btn)=>{
      const active = btn.dataset.lang === selected;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    const select = document.getElementById('languageSelect');
    if (select) select.value = selected;
  }

  function bindLanguagePicker(){
    const picker = document.querySelector('.language-picker');
    const select = document.getElementById('languageSelect');
    if (!picker || !select) return;

    const saved = localStorage.getItem('rs-language') || 'es';
    select.value = ['es','en','it'].includes(saved) ? saved : 'es';

    document.querySelectorAll('.language-pill').forEach((button)=>{
      button.addEventListener('click', ()=> setLanguage(button.dataset.lang || 'es'));
    });

    select.addEventListener('change', (event) => setLanguage(event.target.value));
    setLanguage(select.value);
  }

  function load(src, onload){
    const script=document.createElement('script');
    script.src=src;
    if(onload) script.onload=onload;
    document.body.appendChild(script);
    return script;
  }

  const initEnhancements=()=>{
    load('mortgage-calculator.js',()=>load('contact-links.js'));
    load('service-areas.js');
    bindLanguagePicker();
    window.setTimeout(()=>{ if(!document.querySelector('.contact-social-list')) load('contact-links.js'); }, 2500);
  };

  const init=()=>{
    bindLanguagePicker();
    load('mortgage-calculator.js',()=>load('contact-links.js'));
    load('service-areas.js');
    if(!document.querySelector('link[data-language-switcher-styles]')){
      const styles=document.createElement('link');
      styles.rel='stylesheet';
      styles.href='language-switcher.css';
      styles.dataset.languageSwitcherStyles='true';
      document.head.appendChild(styles);
    }
    // keep the page translation active even if the old remote script is not available
    window.setLanguage = setLanguage;
    setLanguage(document.getElementById('languageSelect') ? document.getElementById('languageSelect').value : 'es');
    window.setTimeout(()=>{ if(!document.querySelector('.contact-social-list')) load('contact-links.js'); }, 2500);
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();
