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

function retornarValor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(10), 5000)
    })
} 

// fazendo mesmo codigo com async/await ()
// executa na ordem, sem async/await executa tudo de uma vez
// await (esperar)
// async await precisa de uma promise
async function executar() {
    // espera 5 segundos e executa e depois prossegue
    let valor = await retornarValor()

    await esperarPor(2000)
    console.log(`Async/Await 1...${valor}`)

    await esperarPor(2000)
    console.log(`Async/Await 2...${valor + 1}`)

    await esperarPor(2000)
    console.log(`Async/Await 3...${valor + 2}`)
}

executar()

// nao funciona, pois é uma promise
// a variavel vai ser criada antes da funcao terminar de executar
// promise ainda nao resolvida
// const v = executar()
// executar().then(console.log)