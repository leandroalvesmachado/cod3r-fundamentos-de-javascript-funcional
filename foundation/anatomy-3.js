// Arrow function vs Function expression

// Function expression
const increment1 = function(n) {
    return n + 1
}

// Arrow function is always anonymous function
const increment2 = (n) => {
    return n + 1
}

// com apenas um parametro, pode remover as ()
const increment3 = n => {
    return n + 1
}

// outra forma com um parametro
const increment4 = n => n + 1


console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))


const sum = (a, b) => a + b

console.log(sum(3, 8))
