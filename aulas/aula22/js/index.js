/*

Operadores lógicos

&& -> AND -> E (as duas condiçoes tem que ser verdadeira)
|| -> OR -> OU (apenas uma das condiçoes precisa ser verdadeira)
! -> NOT -> NÃO (inverte o valor da expressão)

*/

console.log(true && true && false); //Todas as expressos precisam ser verdadeira pra retornar true

console.log(true || false);

const usuario = 'Luiz';
const senha = '123456'

const vaiLogar = usuario === 'Luiz' && senha === '123456';

console.log(vaiLogar);

