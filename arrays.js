const valores = [7.0,8.6,9.8,44.8]
console.log(valores[0], valores[3])
console.log(valores[10])

console.log(valores)

valores.push({id:3}, false, null, 'teste') // inserindo valores no array
console.log(valores)

// deleção de valores dentro de um array
console.log(`
deleção de valores dentro de um array ....
  Conteúdo do Array: ${valores}

  1 - Utilizando a função pop(), o último elemento do array será apresentado e retirado do array
     Ex. ${valores.pop()}
     Conteúdo do array após utilizar a função:
         ${valores}
  
  2 - Utilizando delete, informando o índice do array
        delete valores[0] irá eliminar o valor 7
         Ex: ${(delete valores[0])}, ${valores}

`)

