function multiplicacao(valor1, valor2) {
    const resultado = valor1 * valor2
    return resultado
}

function divisao(valor1, valor2) {
    const resultado = valor1 / valor2
    return resultado
}

function adicao(valor1, valor2) {
    const resultado = parseInt(valor1) + parseInt(valor2)
    return resultado
}

function subtracao(valor1, valor2) {
    const resultado = valor1 - valor2
    return resultado
}

function handleBtMultiplicar() {
    const v1 = document.getElementById('valor1').value
    const v2 = document.getElementById('valor2').value
    const resultado = multiplicacao(v1, v2)
    document.getElementById('resultado').innerHTML = resultado
}

function handleBtDividir() {
    const v1 = document.getElementById('valor1').value
    const v2 = document.getElementById('valor2').value
    const resultado = divisao(v1, v2)
    document.getElementById('resultado').innerHTML = resultado
}

function handleBtSomar() {
    const v1 = document.getElementById('valor1').value
    const v2 = document.getElementById('valor2').value
    const resultado = adicao(v1, v2)
    document.getElementById('resultado').innerHTML = resultado
}

function handleBtDiminuir() {
    const v1 = document.getElementById('valor1').value
    const v2 = document.getElementById('valor2').value
    const resultado = subtracao(v1, v2)
    document.getElementById('resultado').innerHTML = resultado
}

document.getElementById('btnMultiplicar').addEventListener('click', handleBtMultiplicar)
document.getElementById('btnDividir').addEventListener('click', handleBtDividir)
document.getElementById('btnSomar').addEventListener('click', handleBtSomar)
document.getElementById('btnDiminuir').addEventListener('click', handleBtDiminuir)