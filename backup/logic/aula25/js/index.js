
function valores(numero){
    if(numero >= 0 && numero <= 5){
        console.log('O numero esta entre 0 e 5.');
    }else if(numero >=6 && numero <=8){
        console.log('O numero entre 6 e 8');
    } else if(numero >= 9 && numero <= 11){
        console.log('O numero esta entre 9 e 11');
    } else{
        console.log('O numero não foi encontrado');
    }
}

valores(20)