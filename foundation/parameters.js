function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3)

// nao gera nenhum problema, parametros adicionais sao ignorados
logParams(1, 2, 3, 4, 5)

// nao gera erro, mas o parametro nao passado retorna undefined
logParams(1, 2)


// valor padrao para o parametro, caso nao tenha passado o valor
function defaultParams(a, b, c = 0) {
    console.log(a, b, c);
}

defaultParams(7, 8, 9);
defaultParams(7, 8);


// array como params
function logNums1(nums) {
    for (let n of nums) {
        console.log(n);
    }
}

logNums1([1, 2, 3])


// quantidade indefinida de params
// ...nums = array
function logNums2(...nums) {
    console.log(nums);

    for (let n of nums) {
        console.log(n);
    }
}

logNums2(1, 2, 3, 4)


function sumAll(...nums) {
    let total = 0;

    for (let n of nums) {
        total += n
    }

    return total
}

console.log(sumAll(1, 2, 3, 4, 5));
