//DESESTRUTURANDO UM ARRAY
const numero = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [primeiroNumero, segundoNumero, ...resto] = numero;

const numero2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] //cada lista é um indice diferente, e dentro desses indices existem sub indices
console.log(numero2[1][2])
console.log(primeiroNumero, segundoNumero);
console.log(resto) //Exibe o restante do array
