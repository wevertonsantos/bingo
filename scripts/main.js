const doc = document
const containerLetraNumero = doc.querySelector('#container_numero')
const containerLetraX = doc.querySelector('#container_letra_x')
const botaoApagar = doc.querySelector('.botao-apagar')

var listaContador = [1, 16, 31, 46, 61]
var listaTotalNumeros = [16, 31, 46, 61, 76]
var letras = ['B', 'I', 'N', 'G', 'O']
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

        botaoNumero.id = `${i}`
        botaoNumero.className = 'botao-numero'
        botaoNumero.textContent = i

        numeroAteX.appendChild(botaoNumero)

        i++
    }
}

tabelaNumeros(listaContador[0], listaTotalNumeros[0])
tabelaNumeros(listaContador[1], listaTotalNumeros[1])
tabelaNumeros(listaContador[2], listaTotalNumeros[2])
tabelaNumeros(listaContador[3], listaTotalNumeros[3])
tabelaNumeros(listaContador[4], listaTotalNumeros[4])