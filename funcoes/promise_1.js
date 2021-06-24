// retorn o a imediatamente
let a = 1
console.log(a)

// let b = new Promise()
// // return uma function
// console.log(typeof b)

// promessa criada
let p = new Promise(function(resolve) {
    // promessa passa apenas um unico valor
    resolve(3)
})

// return a object
// console.log(typeof p)


// promessa cumprida
p.then(function(valor) {
    console.log(valor)
})

// ou

p.then(valor => console.log(valor))


const primeiroElemento = arrayOuString => arrayOuString[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)


