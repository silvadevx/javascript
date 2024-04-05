//Primitivos são imutaveis (string, number, boolean, ubdefined, null, bignit, simbol) -valores copiados

//referencia sao mutaveis (array, object, function)

let nome = 'Luiz';
nome = 'Otavio';
nome[0] = 'R' //Por ser imutavel não ira substituir os valores
console.log(nome[0]);

//Mutaveis são passsados por referencia

let a = [1, 2 ,3];
let b = a;
console.log(a ,b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

let arrayA = [1, 2, 3];
let arrayB = [...a];
let c = arrayB;

console.log(arrayA, arrayB, c);
arrayA.push(4);
arrayB.pop();
console.log(arrayA, arrayB, c);
