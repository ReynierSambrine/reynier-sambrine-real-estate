/* Load the site's original language/navigation behavior, then initialize the mortgage tool locally. */
(function(){
  const initializeMortgage=function(){
    const grid=document.querySelector('.calculator .form-grid');
    if(!grid)return;
    grid.innerHTML=`
      <label><span data-mortgage-label="homePrice"></span><input id="homePrice" type="number" min="0" step="1000" value="450000"></label>
      <label><span data-mortgage-label="downPayment"></span><input id="downPayment" type="number" min="0" max="100" step="0.5" value="10"></label>
      <label><span data-mortgage-label="interestRate"></span><input id="interestRate" type="number" min="0" step="0.1" value="6.5"></label>
      <label><span data-mortgage-label="loanTerm"></span><select id="loanTerm"><option value="15">15</option><option value="20">20</option><option value="30" selected>30</option></select></label>
      <label><span data-mortgage-label="annualTax"></span><input id="annualPropertyTax" type="number" min="0" step="100" value="8100"></label>
      <label><span data-mortgage-label="insurance"></span><input id="annualInsurance" type="number" min="0" step="100" value="4200"></label>
      <label><span data-mortgage-label="hoa"></span><input id="monthlyHoa" type="number" min="0" step="25" value="0"></label>
      <label><span data-mortgage-label="pmi"></span><input id="pmiRate" type="number" min="0" step="0.05" value="0"></label>
      <input id="propertyTax" type="hidden" value="0">`;

    const translations={
      es:{homePrice:'Precio de la casa ($)',downPayment:'Pago inicial (%)',interestRate:'Tasa de interés anual (%)',loanTerm:'Plazo (a��os)',annualTax:'Impuestos anuales ($)',insurance:'Seguro anual ($)',hoa:'HOA mensual ($)',pmi:'PMI anual (%)',payment:'Pago mensual estimado',breakdown:'Capital e intereses',taxes:'Impuestos',insurancePart:'Seguro',loan:'Préstamo',disclaimer:'Estimación informativa. Los impuestos y el seguro se prorratean mensualmente; HOA es mensual y PMI se estima como porcentaje anual del préstamo. No es una oferta de préstamo. Los costos reales pueden variar; consulta con un prestamista.'},
      en:{homePrice:'Home price ($)',downPayment:'Down payment (%)',interestRate:'Annual interest rate (%)',loanTerm:'Loan term (years)',annualTax:'Annual property taxes ($)',insurance:'Annual insurance ($)',hoa:'Monthly HOA ($)',pmi:'Annual PMI rate (%)',payment:'Estimated monthly payment',breakdown:'Principal & interest',taxes:'Taxes',insurancePart:'Insurance',loan:'Loan',disclaimer:'Informational estimate. Taxes and insurance are prorated monthly; HOA is monthly and PMI is estimated as an annual percentage of the loan. Not a loan offer. Actual costs may vary; consult a lender.'},
      it:{homePrice:'Prezzo dell’immobile ($)',downPayment:'Anticipo (%)',interestRate:'Tasso d’interesse annuo (%)',loanTerm:'Durata del mutuo (anni)',annualTax:'Imposte annuali ($)',insurance:'Assicurazione annuale ($)',hoa:'HOA mensile ($)',pmi:'Tasso PMI annuo (%)',payment:'Rata mensile stimata',breakdown:'Capitale e interessi',taxes:'Imposte',insurancePart:'Assicurazione',loan:'Mutuo',disclaimer:'Stima informativa. Imposte e assicurazione sono ripartite mensilmente; HOA è mensile e il PMI è stimato come percentuale annua del mutuo. Non è un’offerta di finanziamento. I costi effettivi possono variare; consulta un finanziatore.'}
    };
    const langSelect=document.getElementById('languageSelect');
    const getLang=()=>translations[langSelect?.value]||translations.es;
    const format=value=>new Intl.NumberFormat(document.documentElement.lang==='en'?'en-US':document.documentElement.lang==='it'?'it-IT':'es-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(value||0);
    function renderLabels(){
      const dict=getLang();
      grid.querySelectorAll('[data-mortgage-label]').forEach(label=>{label.textContent=dict[label.dataset.mortgageLabel]||''});
      const disclaimer=document.querySelector('.calculator .disclaimer');
      if(disclaimer)disclaimer.textContent=dict.disclaimer;
      const paymentLabel=document.querySelector('.estimate [data-i18n="estimatedPayment"]');
      if(paymentLabel)paymentLabel.textContent=dict.payment;
    }
    function calculate(){
      const value=id=>Math.max(0,Number(document.getElementById(id)?.value)||0);
      const price=value('homePrice');
      const principal=price*(1-Math.min(100,value('downPayment'))/100);
      const monthlyRate=value('interestRate')/1200;
      const months=(Number(document.getElementById('loanTerm')?.value)||30)*12;
      const principalInterest=monthlyRate?principal*monthlyRate/(1-Math.pow(1+monthlyRate,-months)):(months?principal/months:0);
      const taxes=value('annualPropertyTax')/12;
      const insurance=value('annualInsurance')/12;
      const hoa=value('monthlyHoa');
      const pmi=principal*value('pmiRate')/1200;
      const dict=getLang();
      const monthly=document.getElementById('monthlyPayment');
      const details=document.getElementById('paymentBreakdown');
      if(monthly)monthly.textContent=format(principalInterest+taxes+insurance+hoa+pmi);
      if(details)details.textContent=`${dict.breakdown} ${format(principalInterest)} · ${dict.taxes} ${format(taxes)} · ${dict.insurancePart} ${format(insurance)} · HOA ${format(hoa)} · PMI ${format(pmi)} · ${dict.loan} ${format(principal)}`;
    }
    window.calculateMortgage=calculate;
    renderLabels();
    grid.querySelectorAll('input,select').forEach(field=>field.addEventListener('input',calculate));
    grid.querySelectorAll('select').forEach(field=>field.addEventListener('change',calculate));
    if(langSelect&&!langSelect.dataset.mortgageListener){
      langSelect.addEventListener('change',()=>{renderLabels();calculate()});
      langSelect.dataset.mortgageListener='true';
    }
    calculate();
  };

  const boot=()=>{
    const legacy=document.createElement('script');
    legacy.src='https://raw.githubusercontent.com/ReynierSambrine/reynier-sambrine-real-estate/c7884face4ddb0c905c6793fcb898018776f2a8c/script.js?cache=20261114-2';
    legacy.onload=initializeMortgage;
    legacy.onerror=initializeMortgage;
    document.body.appendChild(legacy);
    window.setTimeout(initializeMortgage,2500);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
