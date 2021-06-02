// Anonymous function
// IIFE - Immediately Invoked Funciont Expression

// passando parametros logo apos funcao anonima
(function (a, b, c) {
    console.log(`Result: ${a +b +c}`)
})(1, 2, 3);


// funcao executada logo
(function (a, b, c) {
    let x = 300
    console.log(x)
})();


// funcao anonima com arrow
(() => {
    console.log('arrow #01')
})();


// funcao anonima com arrow
(() => console.log('arrow #02'))();