// Armazenando uma função em uma variável
const imprimirSoma = function(a,b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função Arrow em uma variável

const soma = (a, b=0) =>{
    return a + b
}
console.log(soma(3, 4))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("diminui ainda mais a sintaxe de uma Arrow function")