let num1 = 1;
let num2 = 2.5;
let num3 = 10.299928275682

console.log(num1.toString()+ num2);
console.log(num3.toFixed(2)); //Transforma numeros flutuantes em inteiros com casas decimais
console.log(Number.isInteger(num1));

let temp = num1 * 'ola' // Ira retornar o NaN
console.log(Number.isNaN(temp)); // verifica se ira apresentar o erro NaN
