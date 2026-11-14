(function(){
  /* This file remains independently usable as a fallback initializer for the calculator. */
  const start=()=>{
    const grid=document.querySelector('.calculator .form-grid');
    if(!grid)return;
    const labels={es:['Precio de la casa ($)','Pago inicial (%)','Tasa de interés anual (%)','Plazo (años)','Impuestos anuales ($)','Seguro anual ($)','HOA mensual ($)','PMI anual (%)'],en:['Home price ($)','Down payment (%)','Annual interest rate (%)','Loan term (years)','Annual property taxes ($)','Annual insurance ($)','Monthly HOA ($)','Annual PMI rate (%)'],it:['Prezzo dell’immobile ($)','Anticipo (%)','Tasso d’interesse annuo (%)','Durata del mutuo (anni)','Imposte annuali ($)','Assicurazione annuale ($)','HOA mensile ($)','Tasso PMI annuo (%)']};
    if(!grid.querySelector('#annualPropertyTax')){
      grid.innerHTML=`<label><span></span><input id="homePrice" type="number" min="0" step="1000" value="450000"></label><label><span></span><input id="downPayment" type="number" min="0" max="100" step="0.5" value="10"></label><label><span></span><input id="interestRate" type="number" min="0" step="0.1" value="6.5"></label><label><span></span><select id="loanTerm"><option value="15">15</option><option value="20">20</option><option value="30" selected>30</option></select></label><label><span></span><input id="annualPropertyTax" type="number" min="0" step="100" value="8100"></label><label><span></span><input id="annualInsurance" type="number" min="0" step="100" value="4200"></label><label><span></span><input id="monthlyHoa" type="number" min="0" step="25" value="0"></label><label><span></span><input id="pmiRate" type="number" min="0" step="0.05" value="0"></label><input id="propertyTax" type="hidden" value="0">`;
    }
    const language=document.getElementById('languageSelect');
    const currency=n=>new Intl.NumberFormat(document.documentElement.lang==='en'?'en-US':document.documentElement.lang==='it'?'it-IT':'es-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n||0);
    const update=()=>{const l=language?.value==='en'?1:language?.value==='it'?2:0;grid.querySelectorAll('label span').forEach((el,i)=>el.textContent=labels[['es','en','it'][l]][i]);const v=id=>Math.max(0,Number(document.getElementById(id)?.value)||0),principal=v('homePrice')*(1-Math.min(100,v('downPayment'))/100),rate=v('interestRate')/1200,n=(Number(document.getElementById('loanTerm')?.value)||30)*12,pi=rate?principal*rate/(1-Math.pow(1+rate,-n)):(n?principal/n:0),tax=v('annualPropertyTax')/12,insurance=v('annualInsurance')/12,hoa=v('monthlyHoa'),pmi=principal*v('pmiRate')/1200;document.getElementById('monthlyPayment').textContent=currency(pi+tax+insurance+hoa+pmi);document.getElementById('paymentBreakdown').textContent=`${currency(pi)} + ${currency(tax)} taxes + ${currency(insurance)} insurance + ${currency(hoa)} HOA + ${currency(pmi)} PMI`;};
    grid.querySelectorAll('input,select').forEach(el=>el.addEventListener('input',update));language?.addEventListener('change',update);update();
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
