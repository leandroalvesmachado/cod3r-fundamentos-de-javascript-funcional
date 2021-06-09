// map
// retorna um novo array, o array original nao se altera
// retorn a mesma quantidade de elementos do array original


const numbers = [1, 2, 3, 4, 5, 6]

// map com funcao anonima
// multiplicando cada elemento por 2
// retorna um novo array, o array original nao se altera
// retorn a mesma quantidade de elementos do array original
const numbersV2 = numbers.map(function(el) {
    return el * 2
})
// [ 2, 4, 6, 8, 10, 12 ]
console.log(numbersV2)


// map com arrow
const numbersV3 = numbers.map(el => {
    return el * 2
})
// [ 2, 4, 6, 8, 10, 12 ]
console.log(numbersV3)


// map com arrow em uma unica linha
const numbersV4 = numbers.map(el => el * 2)
// [ 2, 4, 6, 8, 10, 12 ]
console.log(numbersV4)


// com o map o array original nao se modifica
const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
]

const getScore = el => el.score

// capturando somente as notas
// [ 6.4, 8.6, 9.4, 9.1 ]
console.log(students.map(getScore))

// arredondando as notas para cada score
// executando dois maps
// [ 7, 9, 10, 10 ]
console.log(
    students
        .map(getScore)
        .map(Math.ceil)
)