// criando funcao da forma normal
function bomDia() {
    console.log('Bom dia')
}

// criando funcao em variavel
// melhor para reaproveitamento da funcao
const boaTarde = function() {
    console.log('Boa Tarde')
}

// uma funcao recebendo outra funcao como parametro
function executarQualquerCoisa(fn) {
    // imprimindo tipo da variavel passada como parametro
    // console.log(typeof fn)

    // garantindo que o parametro funcao
    // === (compara valor e o tipo)
    if (typeof fn  === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// Retornar uma funcao a partir de outra funcao
function potencia(base) {
    // return Math.pow(base, exp)
    return function(exp) {
        return Math.pow(base, exp)
    }
}

// const bits128 = potencia(2, 128)
// console.log(bits128)

// funcao chamando o retorno de uma funcao
const potenciaDe2 = potencia(2)
// 256
console.log(potenciaDe2(8))

// outra forma de passar os parametros no caso acima
// 256
console.log(potencia(3)(4))