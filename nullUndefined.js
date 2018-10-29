let valor // não inicializada
console.log(valor)

valor = null // null significa que a variável está vazia e/ou não aponta para nenhum endereço de memória
console.log(valor)

const produto ={}
console.log(produto)

console.log(produto.preco) // undefined
// delete produto.preco ira deletar a chave preço do objeto.
produto.preco = 7.50
console.log('Produto.preco está setado:',!!produto.preco)// verficando se produto.preco esta setado, o retorno vai ser true
console.log(produto)
produto.preco=null
console.log(produto)
console.log('Produto.preco está setado:',!!produto.preco) // verficando se produto.preco esta setado, o retorno vai ser false