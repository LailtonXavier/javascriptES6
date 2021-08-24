import GeraCpf from './modules/GeraCpf';

import './assets/css/style.css';

// função que auto inicia = IIFE imidiatlely envolque function expression

(function() {
    const gera = new GeraCpf();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();

