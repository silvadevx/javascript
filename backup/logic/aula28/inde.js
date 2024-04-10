//const data = new Date(2019, 3, 20, 15, 14, 27);
// const data2 = new Date('2010--04-20 20:20:59');

// console.log(data.toString());
// console.log('Dia', data.getDate());
//console.log('Mes', data.getMonth());
//console.log('Ano', data.getFullYear());
// console.log('Horas', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Secundos', data.getSeconds());
// console.log('Dia da semana', data.getDay());

function zeroEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const segs = zeroEsquerda(data.getSeconds());

     return `${dia}/${mes}/${ano} ${hora}:${min}:${segs}`;
}

const data= new Date()
const dataBrasil = formataData(data);
console.log(dataBrasil);