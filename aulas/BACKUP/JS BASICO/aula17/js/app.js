function saudacao(numero) {
    //console.log(`Seu numero é ${numero}`); //Usar o return
    return `Seu numero é: ${numero}`;
}

const variavel = saudacao('10');
console.log(variavel); // Ira retornar undefined

function soma(a, b){
    const resultado = a + b;
    return resultado;

    //Tudo que tiver dentro do {} é o escopo da funçao
    // Dentro dos () é parametro
}

console.log(soma(2, 5));
console.log(soma('Lucas', ' Marques')); //Irá concatenar

//Função anonima

const raiz = function(n){
    return n ** (1/2);
}

console.log(raiz(25));

// Arrow function

const raizQuadrada = (n) => {
    return n ** (1/2);
}

console.log(raizQuadrada(9));