let a = 4
console.log(a)


// Function Declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia()


// Function Expression, usa funcao anonima
// utilizar uma variavel como funcao, cria uma flexibilidade de reuso enorme
const boaTarde = function() {
    console.log('Boa tarde!')
}

boaTarde()


// flexibilidade nos parametros
// NaN = Not a Number
function somar(a, b) {
    return a + b
}

const resultado = somar(3, 4, 5, 6, 7, 8)
console.log(resultado)