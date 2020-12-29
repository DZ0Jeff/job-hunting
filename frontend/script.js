const empresa = document.querySelector('#empresa')
const vaga = document.querySelector('#vaga')
const btn = document.querySelector('#send')
const text = document.querySelector('#log')
const stopBtn = document.querySelector('#stop')

// Mostrar na tela
eel.expose(output)
text.innerHTML = ``
function output(texto){
    text.innerHTML += `${texto} </br>`
}

// Reativar botão
eel.expose(enableButton)
function enableButton(){
    btn.disabled = false
}

// Enviar ao backend
btn.addEventListener('click',() => {
    btn.disabled = true
    text.innerHTML = `Carregando...</br>`
    eel.send(empresa.value, vaga.value)
})

// Parar busca de empregos
// btn.addEventListener('click', () => {
//     eel.stop()
// })