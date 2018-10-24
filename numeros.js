const peso1 = 1.0
const peso2 = Number('2.0')
const avaliacao1 = 9.871
const avaliacao2 = 6.871

let resultado = peso1 / peso2
console.log(peso1, peso2)
console.log(resultado)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(resultado))

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total /(peso1 +peso2)

console.log("Apresentando o valor de média com duas casas decimais: "+ media.toFixed(2))
console.log("Apresentando o valor de média no formato string: "+ media.toString())
console.log("Apresentando o valor de média em binário: "+ media.toString(2)) // converter em binário
console.log("O tipo da variável média: " + typeof media)
