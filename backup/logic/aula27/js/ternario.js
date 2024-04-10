//  (condilção) ? 'valor para verdadeiro : 'Valor para falso';

const pontuacao = 999;
const nivelUsuario = pontuacao >= 1000 ? 'Usuario VIP' : 'Usuario Normal';
const corUsuario = 'Branco';
const CorPadrao = corUsuario || 'Preta';

if(pontuacao >= 1000){
    console.log('Usuario VIP');
} else {
    console.log ('Usuario normal');
}

console.log(nivelUsuario);

console.log(CorPadrao);