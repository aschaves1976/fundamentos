var numero = 1
{
    let numero = 2
    console.log('dentro primeiro bloco = ', numero)
}
console.log('fora primeiro bloco = ', numero)

let numero2 = 3
{
    let numero2 = 4
    console.log('dentro segundo bloco = ', numero2)

}
console.log('fora segundo bloco = ', numero2)
{
    let numero02 = 5
    console.log('dentro terceiro bloco = ', numero)
}
//console.log('dentro primeiro bloco = ', numero02) // vai dar erro: ReferenceError: numero02 is not defined
