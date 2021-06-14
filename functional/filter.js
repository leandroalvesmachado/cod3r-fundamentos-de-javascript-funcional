// filter retonar o array com o mesmo tamanho ou menor, nunca maior
// o array original nao se modifica

const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = el => el > 0
const greaterThanThen = el => el > 10
const even = el => el % 2 === 0

// [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers.filter(el => el > 0))

// utilizando funcao como parametro
// [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers.filter(greaterThanZero))

// []
console.log(numbers.filter(greaterThanThen))

// numeros pares
// [ 2, 4, 6 ]
console.log(numbers.filter(even))

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
]

const greatStudent = student => student.score >= 9

// retornar os estudantes com nota maior ou igual a 9
// [ { name: 'Emma', score: 9.4 }, { name: 'Peter', score: 9.1 } ]
console.log(students.filter(greatStudent))