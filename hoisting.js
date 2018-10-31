// Hoisting é o mesmo que içar, ou jogar para cima
console.log('a = ', a) // retorna undefined, pois o JS faz o içamento da declaração da variavel para cima
var a = 2
console.log('a = ', a)

/*O que foi o içamento dito acima em linhas de código
var a
console.log('a = ', a) // retorna undefined, pois o JS faz o içamento da declaração da variavel para cima
a = 2
console.log('a = ', a)
*/

// O mesmo irá ocorrer dentro de uma função
function teste(){
    console.log('Na função teste a = ', a) // retorna undefined, pois o JS faz o içamento da declaração da variavel para cima
    var a = 2
    console.log('Na função teste a = ', a)    
}
teste()