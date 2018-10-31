const saudacao = 'Opa !!'

function exec(){
    const saudacao = 'Faaalaa !!!'
    return saudacao
}

const Cliente = {
    nome: 'Igor',
    idade: 65,
    peso: 90,
    endereco:{
        logradouro: 'Rua vai e vem',
        numero: 100
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)
