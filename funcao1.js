// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3) // retorna 5
imprimirSoma(2) // retorna NaN por estar somando com um valor undefined
imprimirSoma(2, 10, 4,5,6,7,8,9) // retorna 12 pois só irá considerar os dois primeiros parametros conforme definido na função
imprimirSoma() // retorna NaN pois esta somando valores undefined

// Funçao como retorno
function soma(a, b=0){
    return a+b
}

console.log(soma(2,3)) // retorna 5
console.log(soma(2)) // retorna 2, pois o segundo parâmetro já foi inicializado com o valor Zero (0)