const resultado = nota => nota >= 7.0 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7.1))
console.log(resultado(6.9))

const resultado2 = nota =>{
    return  nota >=7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado2(5))