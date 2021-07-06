function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// SyntaxError: await is only valid in async function
// ja o dino suporte diretamente
// await esperarPor(3000)

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

// fazendo mesmo codigo com async/await ()
// executa na ordem, sem async/await executa tudo de uma vez
// executa de forma sincrona
async function executar() {
    await esperarPor(2000)
    console.log('Async/Await 1...')

    await esperarPor(2000)
    console.log('Async/Await 2...')

    await esperarPor(2000)
    console.log('Async/Await 3...')
}

executar()