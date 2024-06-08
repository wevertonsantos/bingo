const $ = document
const container = $.querySelector('#container')
const containerNumero = $.querySelector('#container_numero')
const containerLetraX = $.querySelector('#container_letra_x')
const botaoLimpar = $.querySelector('.botao-limpar')

const listaPrimeiroContador = [1, 16, 31, 46, 61]
const listaUltimoContador = [16, 31, 46, 61, 76]
const letras = ['B', 'I', 'N', 'G', 'O']
letras.reverse()

letras.reverse()
letras.forEach((letra) => {
    var textoLetra = doc.createElement('p')
    const textoLetra = $.createElement('p')
    textoLetra.className = 'letra'
    textoLetra.textContent = letra
    textoLetra.id = letra
    containerLetraX.insertAdjacentElement('afterbegin', textoLetra)
})

const tabelaNumeros = (i, x) => {
    const numeroAteX = doc.createElement('div')
    const numeroAteX = $.createElement('div')

    if (i <= x) {
        numeroAteX.id = `numeroAte${x}`
        containerLetraNumero.appendChild(numeroAteX)
        numeroAteX.id = `numero${i}Ate${x - 1}`
        numeroAteX.className = 'conjuntoNumero'
        containerNumero.appendChild(numeroAteX)
    }

    while (i < x) {
        const botaoNumero = doc.createElement('button')
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
    botaoNumero.textContent = numero
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

}

tabelaNumeros(listaContador[0], listaTotalNumeros[0])
tabelaNumeros(listaContador[1], listaTotalNumeros[1])
tabelaNumeros(listaContador[2], listaTotalNumeros[2])
tabelaNumeros(listaContador[3], listaTotalNumeros[3])
tabelaNumeros(listaContador[4], listaTotalNumeros[4])
