let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) // retorno false
console.log(!!isAtivo)
console.log(`Os verdadeiros ...
  !!3 = ${!!3}
  !!-1 = ${!!-1}
  espaço = ${!!' '}
  texto = ${!!'testando'}
  array = ${!![]}
  objeto = ${!!{}}
  tipo infinito = ${!!Infinity}
  resultado de uma atribuição = ${!!(isAtivo = Infinity)}

`)
console.log(`Os falsos ....
   Zero(0) = ${!!0}
   String vazia = ${!!''}
   Null = ${!!null}
   Not a Number (NaN) = ${!!NaN}
   Undefined = ${!!undefined}
   resultado de uma atribuição, se no lado direito da mesma o valor for falso = ${!!(isAtivo=false)}

   ${!!(''||null||0||' ')}
  
`)
let nome = ''
console.log(nome||'Desconhecido')
nome = 'Lucas'
console.log(nome||'Desconhecido')
