console.log(typeof Object) // retorno = function
console.log(typeof new Object()) // retorno = object
console.log(typeof new Object) // retorno = object

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)
console.log(typeof new Cliente())

class Produto{}
console.log(typeof Produto)
console.log(typeof new Produto)
console.log(typeof new Produto())