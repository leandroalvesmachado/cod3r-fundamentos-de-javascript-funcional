// lendo arquivo
const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        // forma assincrona
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })

        console.log('Depois de ler')
    })
}

// __dirmane = diretorio atual do fonte
const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => console.log(linhas))
