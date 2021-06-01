// Anonymous function
// funcao sem nome

(function (a, b, c) {
    return a + b + c;
})


// Function expression
// atribuir o resultado de uma funcao em uma variavel

const sum = function (a, b) {
    return a + b
}

const result = sum(7, 59)
console.log(result)

// atribuindo funcao a uma variavel, no caso anotherSum
const anotherSum = sum
console.log(anotherSum(5, 9))