//Break e continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

for (let numero of numeros){
    
    if(numero === 2){
        console.log('Pulei o numero 2')
        continue; //Ira dar sequencia ao código assim que achar o valoe
    }
    console.log(numero);

    // Assim que o valor for encontrado ira parar de executar o código
    if(numero === 7){
        console.log('Achei o valor e parei de executar o código')
        break;
    }
}