//TRATANDO E LANÇANDO ERROS

try {
    console.log(naoExisto);
} catch (Erro){
    console.log('Ainda não existe');
}

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser numeros.');
    }

    return x + y;
}

try{
console.log(soma('a', 'b'));
console.log('1', 2);
console.log(1, 2)
} catch (error){
    console.log(error);//Nunca exibir esse erro para o usuario final
    console.log('Erro 0101');
}