const elementoChute = document.getElementById('chute');


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;


const recoginiton = new SpeechRecognition();
recoginiton.lang = 'pt-BR'
recoginiton.start()

recoginiton.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeChuteValido(chute)

}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
`
}

console.log(numeroSecreto)

recoginiton.addEventListener('end', () => recoginiton.start())