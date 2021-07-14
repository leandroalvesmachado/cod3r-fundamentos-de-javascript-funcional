// funcao construtora
function Produto(nome, preco, desc = 0.15) {
    // atributos publicos
    this.nome = nome
    this.preco = preco
    this._desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this._desc)
    }
}

// criando metodo na funcao
Produto.prototype.log = function() {
    // acesso ao this
    console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function() {
        return this._desc
    },
    set: function(novoDesconto) {
        if (novoDesconto >= 0 && novoDesconto <= 1) {
            this._desc = novoDesconto
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `${this._desc * 100}% de desconto`
    }
})

const p1 = new Produto('Caneta', 8.59)

// Nome: Caneta Preço: R$ 8.59
p1.log()

// 0.15
console.log(p1.desc)

// 15% de desconto
console.log(p1.descString)

p1.desc = 0.99

// 0.99
console.log(p1.desc)
