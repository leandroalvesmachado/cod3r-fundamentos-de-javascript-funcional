// Create a range function

// range(10, 19, 2) -> [10, 12, 14, 16, 18]
// range(6, 2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]

function range(a, b, s) {
    const nums = []

    for (let i = 1; i <= a; i++) {
        nums.push(i);
    }

    return nums
}

// range(5) -> [1, 2, 3, 4, 5]
console.log(range(5))

// range(6, 11) -> [6, 7, 8, 9, 10, 11]
console.log(range(6, 11))