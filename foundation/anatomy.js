// Function declaration

function sayHello() {
    console.log('Hello!')
}

sayHello()


function sayHelloTo(name) {
    console.log(`Hello ${name}`);
}

sayHelloTo('Leandro sayHelloTo')


function returnHi() {
    return 'Hi!'
}

let greeting1 = returnHi()
const greeting2 = returnHi()
console.log(greeting1)
console.log(greeting2)
console.log(returnHi())


function returnHiTo(name) {
    return `Hi ${name}`
}

console.log(returnHiTo('Leandro returnHiTo'))