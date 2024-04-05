/*
    Luiz Otavio Miranda tem 30 anos, pesa 84kg, tem 1.8 de altura e seu IMC é de 25.925925925925924
*/

const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura); //peso / (altura * altura)
let anoDeNascimento = 2024 - 30;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg, tem', altura, 'de altura e seu IMC é de:', imc);
console.log(nome, 'nasceu em', anoDeNascimento);

//Template Strings

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}`);

/*
    Forma concatenada do código:

    console.log(nome + ' ' + sobrenome, + ' tem' + idade + ' anos, pesa' + peso + 'Kg, tem' + altura + ' de altura e seu IMC é de:' + imc);
*/
