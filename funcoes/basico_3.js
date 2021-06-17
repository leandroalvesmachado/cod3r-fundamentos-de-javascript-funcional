// arrow function
// arrow function é uma função anonima

const felizNatal = () => console.log('Feliz Natal')
felizNatal()

const saudacao1 = (nome) => "Fala " + nome + " !!"
const saudacao2 = nome => "Fala " + nome + " !!"
const saudacao3 = nome => `Fala ${nome} !!`

// Fala Leandro!!
console.log(saudacao1('Leandro1'))

// Fala Leandro!!
console.log(saudacao2('Leandro2'))

// Fala Leandro!!
console.log(saudacao3('Leandro3'))


// recebendo array como parametro
const somar1 = (numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }

    return total
}

// recebendo array como parametro
const somar2 = function(numeros) {
    let total = 0
    for (let n of numeros) {
        total += n
    }

    return total
}

// quantidade de parametros variaveis
const somar3 = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }

    return total
}

// 55
console.log(somar1([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]))

// 55
console.log(somar2([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]))

// 45
console.log(somar3(1, 2, 3, 4, 5, 6, 7, 8 , 9))


// funcao dentro de uma funcao usando arrow function
const potencia1 = (base) => {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potencia2 = (base) => {
    return (exp) => {
        return Math.pow(base, exp)
    }
}

const potencia3 = base => {
    return exp => {
        return Math.pow(base, exp)
    }
}

const potencia4 = base =>
    exp => {
        return Math.pow(base, exp)
    }


    // funcao arrow dentro de outra arrow
const potencia5 = base => exp => Math.pow(base, exp)

// 256
console.log(potencia1(2)(8))

// 256
console.log(potencia2(2)(8))

// 256
console.log(potencia3(2)(8))

// 256
console.log(potencia4(2)(8))

// 256
console.log(potencia5(2)(8))


// this
// criando um metodo log dentro do tipo array para ser usado
Array.prototype.log = function() {
    console.log('Opa')
}

const numeros = [1, 2, 3]
numeros.log()