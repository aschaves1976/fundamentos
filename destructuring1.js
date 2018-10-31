const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua zzz',
        numero: 123
    }
}

/**
 * As chaves após a palavra reservada const, representa o operador de desestruturação
 * O que está sendo feito na linha abaixo: tirando do objeto pessoa os atributos nome e idade
 */
const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {sobrenome: sn, bemHumorada: bh = true} = pessoa
console.log('sobrenome',sn,'bem humorada', bh)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

/**
 * As linhas de código abaixo vão apresentar o seguinte erro:
 * Cannot destructure property `agencia` of 'undefined' or 'null'.
 * 
 * Causa: a estrutura aninhada conta não existe no objeto pessoa
 * 
 *  const { conta: { agencia, banco}} = pessoa 
 *  console.log(agencia, banco)
*/