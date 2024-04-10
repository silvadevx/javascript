// DESESTRUTURAÇÃO DE OBJETO

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Marques',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

//const nome = pessoa.nome; //atribuição padrao
const { nome, sobrenome, idade } = pessoa; 
console.log(nome, sobrenome)

const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero)