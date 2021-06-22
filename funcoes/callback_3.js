const nums = [1, 2, 3, 4, 5]

// dobrando cada elemento
const dobro = n => n * 2

// dobrando cada elemento somando com o indice do array
const dobroComIndice = (n, i) => n * 2 + i

// dobrando cada elemento somando com o indice do array + o tamano do array
// terceiro parametro é um array
const dobroComIndiceArray = (n, i, proprioArray) => n * 2 + i + proprioArray.length

// [ 2, 4, 6, 8, 10 ]
console.log(nums.map(dobro))

// [ 2, 5, 8, 11, 14 ]
console.log(nums.map(dobroComIndice))

// [ 7, 10, 13, 16, 19 ]
console.log(nums.map(dobroComIndiceArray))


const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']

// captura a primeira letra de cada elemento
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)

// [ 'A', 'B', 'G', 'L', 'R' ]
console.log(nomes, letras)

// mini desafio
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getNome = item => item.nome

// [ 'Caneta', 'Impressora', 'Caderno', 'Lapis', 'Tesoura' ]
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)

// [ 79.9, 0, 108.4, 17.46, 19.2 ]
console.log(totais)


// construindo um metodo map para entender como ele funciona por baixo
Array.prototype.meuMap = function(fn) {
    const novoArray = []

    for (let i = 0; i < this.length; i++) {
        const resultado = fn(this[i], i, this);
        novoArray.push(resultado)
    }

    return novoArray
}

const getTotalMap = item => item.qtde * item.preco
const totaisMap = carrinho.meuMap(getTotalMap)

// [ 79.9, 0, 108.4, 17.46, 19.2 ]
console.log(totaisMap)