// funcao construtora
function Produto(nome, preco, desc = 0.15) {
    // atributos publicos
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 8.59)
// Produto {} objeto do type produto
// Produto { nome: 'Caneta', preco: 8.59 }
console.log(p1)

// object
console.log(typeof p1)

const p2 = new Produto('Geladeira', 2345.98)

// Produto { nome: 'Geladeira', preco: 2345.98 }
console.log(p2)

// Geladeira
console.log(p2.nome)

// 1994.0829999999999
console.log(p2.precoFinal())

