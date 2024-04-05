const h1 = document.querySelector('.container h1');
const date = new Date();

function getDaySemana(diaSemana) {
    let diaDaSemana;

    switch (diaSemana) {
        case 0:
            diaDaSemana = 'Domingo';
            return diaDaSemana;
        case 1:
            diaDaSemana = 'Segunda-feira';
            return diaDaSemana
        case 2:
            diaDaSemana = 'Terça-feira';
            return diaDaSemana
        case 3:
            diaDaSemana = 'Quarta-feira';
            return diaDaSemana
        case 4:
            diaDaSemana = 'Quinta-feira';
            return diaDaSemana
        case 5:
            diaDaSemana = 'Sexta-feira';
            return diaDaSemana
        case 6:
            diaDaSemana = 'Sabado';
            return diaDaSemana
        default:
            diaDaSemana = 'erro';
    }
}

function monthName(numberMonth) {
    let nameMonth;

    switch (numberMonth) {
        case 0:
            nameMonth= 'Janeiro';
            return nameMonth
        case 1:
            nameMonth = 'Fevereiro';
            return nameMonth
        case 2: 
             nameMonth = 'Março';
            return nameMonth
        case 3:
            nameMonth = 'Abril';
            return nameMonth
        case 4: 
            nameMonth = 'Maio';
            return nameMonth
        case 5:
            nameMonth = 'Junho';
            return nameMonth
        case 6:
            nameMonth = 'Julho';
            return nameMonth
        case 7:
            nameMonth = 'Agosto';
            return nameMonth
        case 8:
            nameMonth = 'Setembro';
            return nameMonth
        case 9:
            nameMonth = 'Outubro';
            return nameMonth
        case 10:
            nameMonth = 'Noverbro';
            return nameMonth
        case 11:
            nameMonth = 'Dezembro'
            return nameMonth
    }
}

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function createDate (date){
    const weekName = date.getDay();
    const numeroMes = date.getMonth();

    const dayName = getDaySemana(weekName);
    const numberMonth = monthName(numeroMes);

    return `${dayName} ${date.getDate()} de ${numberMonth} de  ${date.getFullYear()}  as `  +
    `${zeroEsquerda(date.getHours())} horas e  ${zeroEsquerda(date.getMinutes())} minutos`

}

h1.innerHTML = createDate(date);
