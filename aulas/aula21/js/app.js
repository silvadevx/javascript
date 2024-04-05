/*

> maior que
>= maior ou igual a
< menor que
<= menor ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!=  diferente (valor)
!== diferente estrito (valor e tipo)

*/

const comp = 10 >= 5;
const compMenor = 10 <= 11;
console.log(comp, compMenor);

const compA = 10;
const compB = '10';
const result = compA !== compB;
console.log(result);