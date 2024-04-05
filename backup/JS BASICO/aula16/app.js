const alunos = ['Luiz', 'Maria', 'João']; //Array
// Os arrays são indexado pelo elemento
// const removido = alunos.pop('');

alunos[0] = 'Lucas'; //Alterando o valor do indice "0"
alunos[3] = 'Fernanda'; //Adicionando um elemento na posiçao "3" final do array
alunos.push('Gabriel') // A funçao push adiciona um indice no final do array
alunos.unshift('Rafael'); // A funçao ira empurras os indices e adiionar o novo valor no indice 0
//alunos.pop(''); //Remove do fim do array
//alunos.shift('') Remove do inicio do array

console.log(alunos);
console.log(alunos[1]); //Acessando um indice no array
console.log(alunos.length); // Verificando o tamanho do array
console.log(alunos.slice(0, -3)); // edve ser passado o indice +1 de onde quer cortar
console.log(alunos instanceof Array); //Retorna true ou false 