const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el

// duas maneiras de fazer
const total1 = numbers.reduce(sum)
const total2 = numbers.reduce((total, el) => total + el)

// 21
console.log(total1)

// 21
console.log(total2)


// media
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

const result = numbers.reduce(avg)

// media = 3.5
console.log(result)

