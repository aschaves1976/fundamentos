console.log(`
v and v -> v
v and f -> f
f and ? -> f

v or ? -> v
f or v -> v
f or f -> f 

"ou exclusivo"
v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

"negação lógica"
!v -> f
!f -> v

`)

function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 
    const comprarTV50    = trabalho1 && trabalho2
    const comprarTV32    = trabalho1 != trabalho2 // xor
    const manterSaudavel = !comprarSorvete

    return{comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

