// retorn o a imediatamente
let a = 1
console.log(a)

// let b = new Promise()
// // return uma function
// console.log(typeof b)

// promessa criada
let p = new Promise(function(cumprimPromessa) {
    // promessa passa apenas um unico valor
    cumprimPromessa(3)
})

// return a object
// console.log(typeof p)


// promessa cumprida
p.then(function(valor) {
    console.log(valor)
})

// ou

p.then(valor => console.log(valor))



