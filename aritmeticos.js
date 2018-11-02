const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2 // resto da divisão

console.log(`
a = ${a}; b = ${b}; c = ${c}; d = ${d}
---------------------------------------
a + b + c + d = ${soma}
d - b         = ${subtracao}
a * b         = ${multiplicacao}
d / a         = ${divisao}
a % 2         = ${modulo}
---------------------------------------

`)