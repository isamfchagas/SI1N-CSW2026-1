var issoEumaString = "isso é uma string";
let numero = 42
const issoeumbooleano = true  // nao pode reatribuir m valor a uma const

let numerostring = "42"

if (numero == numerostring) { // == serve para comparacao, ja === serve para saber a diferenca da variavel, se e numero, string
    console.log("as strings sao iguais")
}
else {
    console.log("as strings sao diferentes")
}

//quando a soma é com diferentes tipos de variavel

let soma = numero + numerostring 

console.log(soma)

// soma de duas variaveis do mesmo tipo 

console.log (numero + numero)

var varglobal = 'isso e uma variavel global'
{
    let varlocal = 'eu sou uma variavel local'
    console.log(varglobal)
    console.log(varlocal)
}

console.log(varglobal)  
//console.log(varlocal) da erro pois a let foi criada no escopo abaixo do console.log que foi digitado nessa linha

let floatvalue1 = 0.06
let floatvalue2 = 0.01
let sum = floatvalue1 + floatvalue2

console.log(sum.toPrecision(2))


for (let i=0; i < 5; i++) {

    console.log(i*2 + 1) //IMPRIMINDO IMPARES COM FOR
}

// IMPRIMINDO IMPARES COM WHILE

let x=0;
while (x < 5) {
    console.log(x*2 + 1);
    x++;
}

console.log(Math.PI)
console.log(Math.random())
console.log(Math.cos(90))

//gerando numeros primos enre 1 a 100

function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return false
}
