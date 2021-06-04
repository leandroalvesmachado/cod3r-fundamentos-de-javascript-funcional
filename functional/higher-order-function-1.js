function run(fn) {
    return `Result: ${fn()}`
}

function sayHello() {
    console.log('Hello!!')
}

// passando funcao como parametro
run(sayHello)

// passando funcao anonima como parametro
run(function() {
    console.log('run!!!')
})

// passando funcao existente do javascript
const result = run(Math.random)
console.log(result)