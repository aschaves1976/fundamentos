const nome = 'Rebeca'
const concatenacao = 'Olá'+nome+'!'
// para trabalhar com template string utilizar o sinal de crase.
// Os espaços e identações no template serão considerados no resultado final
const template =`

     Olá 
     ${nome}!
`
console.log(concatenacao, template)
// expressôes
console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei .... ${up('cuidado')} !`)