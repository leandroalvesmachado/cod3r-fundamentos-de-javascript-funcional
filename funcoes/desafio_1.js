// somar (3)(4)(5)

function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

// 12
console.log(somar(3)(4)(5))

// passando 2 parametros e somando o resultado chamando outra funcao
const somarAB = somar(3)(4)

// 12
console.log(somarAB(5))


// calcular (3)(7)(fn)
function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y)
        }
    }
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

// 5
console.log(calcular(10)(5)(subtrair))

// 50
console.log(calcular(10)(5)(multiplicar))