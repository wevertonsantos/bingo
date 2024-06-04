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
