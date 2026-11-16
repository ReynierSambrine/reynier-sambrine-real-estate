(function(){
  const initialize=()=>{
    const section=document.querySelector('.areas');
    if(!section||section.dataset.serviceAreasReady==='true')return;
    section.dataset.serviceAreasReady='true';
    if(!document.querySelector('link[data-service-areas-styles]')){
      const styles=document.createElement('link');
      styles.rel='stylesheet';
      styles.href='service-areas.css?v=1';
      styles.dataset.serviceAreasStyles='true';
      document.head.appendChild(styles);
    }
    section.innerHTML=`
      <div class="wrap service-areas-inner">
        <header class="service-areas-heading">
          <p class="service-areas-eyebrow"><span aria-hidden="true"></span> AREAS SERVED</p>
          <h2 data-i18n="areasTitle">Centro y sur de Florida.</h2>
          <p class="service-areas-intro" data-i18n="areasText">Conocimiento local de cada mercado — escuelas, tendencias de precios, zonas de inundación y desarrollo futuro.</p>
        </header>
        <div class="service-areas-grid" aria-label="Áreas de servicio en Florida">
          <article class="service-area-card"><h3>Miami-Dade</h3><p>Miami · Hialeah · Doral · Kendall · Miami Lakes · Homestead · Coral Gables · Florida City</p></article>
          <article class="service-area-card"><h3>Broward &amp; Palm Beach</h3><p>Fort Lauderdale · Hollywood · Pembroke Pines · Miramar · Weston · Coral Springs · West Palm Beach · Boca Raton</p></article>
          <article class="service-area-card"><h3>Suroeste de Florida</h3><p>Naples · Fort Myers · Cape Coral · Lehigh Acres · Bonita Springs · Estero · Immokalee</p></article>
          <article class="service-area-card"><h3>Centro de Florida</h3><p>Orlando · Kissimmee · St. Cloud · Clermont · Davenport · Lakeland · Winter Haven · Ocala</p></article>
          <article class="service-area-card"><h3>Tampa Bay</h3><p>Tampa · Brandon · Riverview · Wesley Chapel · St. Petersburg · Clearwater</p></article>
          <article class="service-area-card"><h3>Treasure Coast</h3><p>Port St. Lucie · Fort Pierce · Stuart · Okeechobee</p></article>
        </div>
        <p class="service-areas-note">¿No ves tu ciudad? Trabajo en todo el estado a través de la red de Key &amp; Legacy Realty.</p>
      </div>`;
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialize,{once:true});else initialize();
})();
