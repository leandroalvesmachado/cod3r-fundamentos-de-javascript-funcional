const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

// reduce utilizado para somar todos os valores digamos, um totalizador
// quando precisamos realizar um somatorio, media , etc e retornar um valor unico

const getTotal = item => item.qtde * item.preco
const somar = (acumulador, elemento) => acumulador + elemento

const somar2 = (acumulador, elemento) => {
    console.log(acumulador, elemento)

    return acumulador + elemento
}

const totalGeral = carrinho.map(getTotal)

// [ 79.9, 0, 108.4, 17.46, 19.2 ]
console.log(totalGeral)

const totalGeralComReduce = carrinho
    .map(getTotal)
    .reduce(somar2)

// 224.96
console.log(totalGeralComReduce)

