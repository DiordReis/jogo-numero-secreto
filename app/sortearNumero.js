const menorValor = 10;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor +1)
}

const elementoMenorvValor = document.getElementById('menor-valor');

elementoMenorvValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');

elementoMaiorValor.innerHTML = maiorValor


console.log()

