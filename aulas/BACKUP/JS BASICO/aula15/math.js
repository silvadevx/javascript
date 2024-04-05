let num1 = 9.276342;
let num2 = 9.827364;

console.log(Math.floor(num1)); // floor arredonda para baixo 
console.log(Math.ceil(num2)); //ceil arredonda para cima
console.log(Math.round(num1)); // abaixo da metade o numero ira retornar o valor menor, acima da metade ira retornar um maior
console.log(Math.max(1,2,3,4,5,6,7,8,9,-50, -100, -1000, 1500)) //Pega o maior nhumero da sequencia
console.log(Math.min(1,2,3,4,5,6,7,8,9,-50, -100, -1000, 1500)) // Pega o menor numero da sequencia

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

let raizQuadrada = 9;
console.log(raizQuadrada ** (1/2));