// setTimeout(function() {
//     console.log('Executando callback 1...')

//     setTimeout(function() {
//         console.log('Executando callback 2...')

//         setTimeout(function() {
//             console.log('Executando callback 3...')
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vish')
        }, tempo)
    })
}

// esperarPor(3000).then((text) => console.log(text))

// let p = esperarPor(3000)
// p.then((text) => console.log(text))

// vai executar a cada 2 segundos = 3 vezes
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)