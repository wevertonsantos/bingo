const doc = document
const containerLetraNumero = doc.querySelector('#container_numero')
const containerLetraX = doc.querySelector('#container_letra_x')
const botaoApagar = doc.querySelector('.botao-apagar')

const listaContador = [1, 16, 31, 46, 61]
const listaTotalNumeros = [16, 31, 46, 61, 76]
const letras = ['B', 'I', 'N', 'G', 'O']
letras.reverse()

letras.forEach((letra) => {
    var textoLetra = doc.createElement('p')
    textoLetra.className = 'letra'
    textoLetra.textContent = letra
    containerLetraX.insertAdjacentElement('afterbegin', textoLetra)
})

const tabelaNumeros = (i, x) => {
    const numeroAteX = doc.createElement('div')

    if (i <= x) {
        numeroAteX.id = `numeroAte${x}`
        containerLetraNumero.appendChild(numeroAteX)
    }

    while (i < x) {
        const botaoNumero = doc.createElement('button')
        const numero = i
        const classe = 'botao-numero'

        numeroAteX.appendChild(botaoNumero)

        addAtributosBotao(botaoNumero, numero, classe)
        clickBotao(numero)

        i++
    }

}

const addAtributosBotao = (botaoNumero, numero, classe) => {
    botaoNumero.id = numero
    botaoNumero.className = classe
    botaoNumero.textContent = numero
}

const clickBotao = (idNumero) => {
    const numero = doc.getElementById(`${idNumero}`)
    let numeroClicado = 0

    numero.onclick = () => {
        numero.style.backgroundColor = 'black'
    }

    numero.ondblclick = () => {
        numero.style.backgroundColor = ''
    }
}

tabelaNumeros(listaContador[0], listaTotalNumeros[0])
tabelaNumeros(listaContador[1], listaTotalNumeros[1])
tabelaNumeros(listaContador[2], listaTotalNumeros[2])
tabelaNumeros(listaContador[3], listaTotalNumeros[3])
tabelaNumeros(listaContador[4], listaTotalNumeros[4])
