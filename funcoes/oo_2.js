class Produto {

    constructor(nome, preco, desc) {
        // _ serve para indicar que somente a classe manipula pelo get e set
        this._nome = nome
        this._preco = preco
        this.desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    get preco() {
        return this._preco
    }

    set preco(novoPreco) {
        if (novoPreco > 0) {
            this._preco = novoPreco
        }
    }

    // precoFinal() {
    //     return this.preco * (1 - this.desc)
    // }

    // quando se utiliza o get, não chama mais como função e sim como atributo
    get precoFinal() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 10)

// Caneta
// depois da transformacao = Produto: Caneta
console.log(p1.nome)

const p2 = new Produto('Geladeira', 10000, 0.8)

// Produto { nome: 'Geladeira', preco: 10000, desc: 0.8 }
console.log(p2)

// 1999.9999999999995
// chamada como função
// console.log(p2.precoFinal())

// 1999.9999999999995
// chamada com o get, parecido com o atributo
console.log(p2.precoFinal)

const p3 = new Produto('Caneta', 10)

// utilizando set nome
p3.nome = 'Caneta Maior'

// Produto: CANETA MAIOR
console.log(p3.nome)


// function, no final a classe é uma função
console.log(typeof Produto)