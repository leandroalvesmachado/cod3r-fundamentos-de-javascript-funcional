function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

// 94
exec(somarNoTerminal, 56, 38)

// 155
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)

// 25
console.log(r)


// executa em intervalos de forma recorrente
const fn = () => console.log('Exec...')
setInterval(fn, 1000)

// setInterval com arrow
setInterval(() => console.log('Exec 2...'), 1000)

// setInterval com function
setInterval(function() {
    console.log('Exec 2...')
}, 5000)