function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60).then(console.log)

// vai executar a funcao 2 vezes e imprimir no final
// acumulando o resultado da execucao anterior
gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)