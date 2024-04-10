/*
try{
    //É executado quando não há erros
} catch (e){
    // Será exwcutado quando houver um erro
} finally{
    //Sempre será executado
}
*/

function isDate(data){
    // Checando a função de forma invertida
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date...')
    }

    if (!data){
        data = new Date(); //instanciando uma nova data
    }

    return data.toLocaleTimeString('pt-BR', {hour12: false});
}

const hours = isDate();
console.log(hours);