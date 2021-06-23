const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

//funcoes, melhor reaproveitamento
const qtdeMaiorQueZero = item => item.qtde > 0
const getNome = item => item.nome
const qtdeMuitoGrande = item => item.qtde >= 1000

// filtrando a partir da funcao
const itensValido = carrinho.filter(qtdeMaiorQueZero)

// [
//     { nome: 'Caneta', qtde: 10, preco: 7.99 },
//     { nome: 'Caderno', qtde: 4, preco: 27.1 },
//     { nome: 'Lapis', qtde: 3, preco: 5.82 },
//     { nome: 'Tesoura', qtde: 1, preco: 19.2 }
// ]
console.log(itensValido)


// filtrando a partir da funcao e retornando o nome dos filtrados
const nomeItensValido = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome)

// [ 'Caneta', 'Caderno', 'Lapis', 'Tesoura' ]
console.log(nomeItensValido)


// criando sua propria função filter
Array.prototype.meuFilter = function(fn) {
    const novoArray = []

    for (let i = 0; i < this.length; i++) {
        // array indice, indice, proprio array
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }

    return novoArray
}

// filtrando a partir da funcao meuFilter
const itensValido2 = carrinho.meuFilter(qtdeMaiorQueZero)

// [
//     { nome: 'Caneta', qtde: 10, preco: 7.99 },
//     { nome: 'Caderno', qtde: 4, preco: 27.1 },
//     { nome: 'Lapis', qtde: 3, preco: 5.82 },
//     { nome: 'Tesoura', qtde: 1, preco: 19.2 }
// ]
console.log(itensValido2)