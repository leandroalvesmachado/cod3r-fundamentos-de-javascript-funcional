// lendo arquivo
const fs = require('fs')
const path = require('path')

// __dirmane = diretorio atual do fonte
const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo) {
    // exibindo conteudo do arquivo
    console.log(conteudo.toString())
}

// lendo de forma assincrona
// fs.readFile(caminho, {}, exibirConteudo)
// fs.readFile(caminho, exibirConteudo)

console.log('Inicio...')
fs.readFile(caminho, (err, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')


// lendo de forma sincrona
console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')