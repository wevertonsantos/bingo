const $ = document
const container = $.querySelector('#container')
const containerNumero = $.querySelector('#container_numero')
const containerLetraX = $.querySelector('#container_letra_x')
const botaoLimpar = $.querySelector('.botao-limpar')

const listaPrimeiroContador = [1, 16, 31, 46, 61]
const listaUltimoContador = [16, 31, 46, 61, 76]
const letras = ['B', 'I', 'N', 'G', 'O']

letras.reverse()
letras.forEach((letra) => {
    const textoLetra = $.createElement('p')
    textoLetra.className = 'letra'
    textoLetra.textContent = letra
    textoLetra.id = letra
    containerLetraX.insertAdjacentElement('afterbegin', textoLetra)
})

const tabelaNumeros = (i, x) => {
    const numeroAteX = $.createElement('div')

    if (i <= x) {
        numeroAteX.id = `numero${i}Ate${x - 1}`
        numeroAteX.className = 'conjuntoNumero'
        containerNumero.appendChild(numeroAteX)
    }

    while (i < x) {
        const botaoNumero = $.createElement('button')
        const numero = i
        const classe = 'botao-numero'

        numeroAteX.appendChild(botaoNumero)

        addAtributosBotao(botaoNumero, numero, classe)
        clickBotao(numero)
        limparBotao(numero)

        i++
    }

}

const addAtributosBotao = (botaoNumero, numero, classe) => {
    botaoNumero.id = numero
    botaoNumero.className = classe
    if(numero <= 9){
        numero = `0${numero}`
        botaoNumero.textContent = numero
    }else{
        botaoNumero.textContent = numero
    }
}

const clickBotao = (idNumero) => {
    const numero = $.getElementById(`${idNumero}`)
    const letraB = $.getElementById('B')
    const letraI = $.getElementById('I')
    const letraN = $.getElementById('N')
    const letraG = $.getElementById('G')
    const letraO = $.getElementById('O')

    if (idNumero <= 15) {
        numero.addEventListener('click', () => {
            numero.classList.toggle('corFundo1Ate15')
            letraB.classList.add('corFundoLetraB')

            const pegarCorFundo1Ate15 = $.querySelector('.corFundo1Ate15')
            if (pegarCorFundo1Ate15 == null) {
                letraB.classList.remove('corFundoLetraB')
            }
        })
    }

    if (idNumero >= 16 & idNumero <= 30) {
        numero.addEventListener('click', () => {
            numero.classList.toggle('corFundo16Ate30')
            letraI.classList.add('corFundoLetraI')

            const pegarCorFundo16Ate30 = $.querySelector('.corFundo16Ate30')
            if (pegarCorFundo16Ate30 == null) {
                letraI.classList.remove('corFundoLetraI')
            }
        })
    }

    if (idNumero >= 31 & idNumero <= 45) {
        numero.addEventListener('click', () => {
            numero.classList.toggle('corFundo31Ate45')
            letraN.classList.add('corFundoLetraN')

            const pegarCorFundo31Ate45 = $.querySelector('.corFundo31Ate45')
            if (pegarCorFundo31Ate45 == null) {
                letraN.classList.remove('corFundoLetraN')
            }
        })
    }

    if (idNumero >= 46 & idNumero <= 60) {
        numero.addEventListener('click', () => {
            numero.classList.toggle('corFundo46Ate60')
            letraG.classList.add('corFundoLetraG')

            const pegarCorFundo46Ate60 = $.querySelector('.corFundo46Ate60')
            if (pegarCorFundo46Ate60 == null) {
                letraG.classList.remove('corFundoLetraG')
            }
        })
    }

    if (idNumero >= 61 & idNumero <= 75) {
        numero.addEventListener('click', () => {
            numero.classList.toggle('corFundo61Ate75')
            letraO.classList.add('corFundoLetraO')

            const pegarCorFundo61Ate75 = $.querySelector('.corFundo61Ate75')
            if (pegarCorFundo61Ate75 == null) {
                letraO.classList.remove('corFundoLetraO')
            }
        })
    }
}

const limparBotao = (idNumero) => {
    const numero = $.getElementById(`${idNumero}`)
    const letraB = $.getElementById('B')
    const letraI = $.getElementById('I')
    const letraN = $.getElementById('N')
    const letraG = $.getElementById('G')
    const letraO = $.getElementById('O')

    botaoLimpar.addEventListener('click', () => {
        letraB.classList.remove('corFundoLetraB')
        letraI.classList.remove('corFundoLetraI')
        letraN.classList.remove('corFundoLetraN')
        letraG.classList.remove('corFundoLetraG')
        letraO.classList.remove('corFundoLetraO')
        numero.classList.remove('corFundo1Ate15')
        numero.classList.remove('corFundo16Ate30')
        numero.classList.remove('corFundo31Ate45')
        numero.classList.remove('corFundo46Ate60')
        numero.classList.remove('corFundo61Ate75')
    })
}

tabelaNumeros(listaPrimeiroContador[0], listaUltimoContador[0])
tabelaNumeros(listaPrimeiroContador[1], listaUltimoContador[1])
tabelaNumeros(listaPrimeiroContador[2], listaUltimoContador[2])
tabelaNumeros(listaPrimeiroContador[3], listaUltimoContador[3])
tabelaNumeros(listaPrimeiroContador[4], listaUltimoContador[4])