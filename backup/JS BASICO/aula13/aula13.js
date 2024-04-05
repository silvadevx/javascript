let umaString = "um texto"; //Apenas se precisar "escapar" as aspas duplas
console.log(umaString);
console.log(umaString[4]);
console.log(umaString[8]);
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[t]/g));
console.log(umaString.replace('um', 'outra'));

let outraString = 'O rato roeu a roupa do rei de roma';
console.log(outraString.replace(/r/g, '#')); // O parametro /r/g faz a troca de todos os "r" por #
console.log(outraString.length);
console.log(outraString.slice(2, 6)); //Devera ser passado como paramentro o indice de onde quer que seja cortado +1
console.log(umaString.toUpperCase());
console.log(outraString.toLowerCase());
