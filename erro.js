function tratarErrorELancar(error){
    //throw new Error('.....')
    //throw 'erro'
    throw{
        nome: error.nome,
        msg: error.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!')

    }catch(e){
        tratarErrorELancar(e.name)

    }finally{
        console.log('Fim !!')
    }
}
const obj= {nome: 'João'}
imprimirNomeGritado(obj)