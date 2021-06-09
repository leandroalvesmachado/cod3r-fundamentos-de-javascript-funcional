function finalPrice1(tax, price) {
    return price * (1 + tax)
}

// 27.29625
console.log('finalPrice1 = ' + finalPrice1(0.0875, 25.1))


// tecnica curring
// funcao retornando outra funcao
function finalPrice2(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

// 27.29625
console.log('finalPrice2 = ' + finalPrice2(0.0875)(25.1))


// possibilidade de uma maior reuso da funcao
const nycFinalPrice = finalPrice2(0.0875)

// nycFinalPrice = 27.29625
console.log('nycFinalPrice = ' + nycFinalPrice(25.1))
