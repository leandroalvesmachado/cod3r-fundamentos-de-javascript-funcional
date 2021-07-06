// tratamento de erros com promise

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        // if (Math.random() < chanceErro) {
        //     reject('Ocorreu um erro')
        // } else {
        //     resolve(valor)
        // }

        try {
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (error) {
            reject(error)
        }
    })
}

// possibilidade de ter varios then aninhados
funcionarOuNao('Testando...', 0.5)
    .then(resultado => console.log(`Resultado: ${resultado}`))
    .then(
        v => console.log(v),
        err => console.log(`Erro especifico: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim'))