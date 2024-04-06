// FUNÇÕES VOID (QuE NÃO RETORNAM NADA)

let valor = 20

// essa funçao void não vai retornar nada, apenas altera o valor da variavel "valor"
function incrementa(){
    valor = 20 + 30;
}

incrementa();

//FUNÇÕES COM PARAMETROS

function soma(x, y) { // x e y são os parametros para essa função
    console.log(x + y)
}

soma(1, 2); // 1 e 2 são os argumentos para os parametros (x e y)

// FUNÇÃO COM RETURN

function mult(n1, n2){
    const numeros = n1 * n2;
    return numeros
}

console.log(mult(10, 20));

// ARROW FUNCTION

const divis = (num1, num2) => num1 / num2;

const divsao = divis(10, 2);
console.log(divsao);


function pintandoCarro(veiculo){
    veiculo.cor = 'Azul'
}

const veiculo = {
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2021,
    cor: 'Branco'
}

pintandoCarro(veiculo) // Chamando a função e passando o o argumento para ela
console.log(veiculo.cor) //exibindo a alteração feita na cor, dentro do objeto
