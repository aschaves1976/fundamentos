/**
 * Utilização de Operador Destructuring em Arrays
 * 
 * O operador de desestruturação esta sendo utilizado
 * observar a localização dos primeiros colchetes
 * 
 * O que esta sendo feito:
 *   Retirando do array o valor 10 e atribuindo a variavel "a"
 */

 const [a] = [10]
 console.log(a)

 const[n1, ,n3, ,n5, n6=17] = [10,7,9,8]
 console.log(n1, n3, n5, n6)

 const [, [, nota]] = [[, 8, 8],[9, 6, 8]]
 console.log(nota)