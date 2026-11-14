/* Load the existing site translations and interactions, then enhance the mortgage tool. */
(function(){
  const legacy=document.createElement('script');
  legacy.src='https://raw.githubusercontent.com/ReynierSambrine/reynier-sambrine-real-estate/c7884face4ddb0c905c6793fcb898018776f2a8c/script.js';
  legacy.onload=function(){
    const calculator=document.createElement('script');
    calculator.src='mortgage-calculator.js';
    document.body.appendChild(calculator);
  };
  legacy.onerror=function(){console.error('Could not load the site language and interaction script.');};
  document.body.appendChild(legacy);
})();
