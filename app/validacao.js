function verificaSeChuteValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }
    if (numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML += 
            `<div>Valor inválido. O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    return

}

if (numero === numeroSecreto) {
    document.body.innerHTML = `
         <h2>Você acertou!</h2>
         <h3>O Número Secreto era ${numeroSecreto}</h3 >
        
         <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
         
         `
}
    
else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>o número secreto é menor <i class="fa-solid fa-down-long"></i> </div> `

} else {
    
    elementoChute.innerHTML += `
    <div>o número secreto é maior <i class="fa-solid fa-up-long"></i> </div> `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})