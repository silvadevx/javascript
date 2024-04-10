// switch case

const data = new Date();
const diaSemana = data.getDay();

function getDaysemana (diaSemana){
    let diaDaSemana;
    switch (diaSemana) {
        case 0:
            diaDaSemana = 'Domingo';
           return diaDaSemana;
        case 1:
            diaDaSemana = 'Segunda';
            return diaDaSemana
        case 2:
            diaDaSemana = 'Terça';
            return diaDaSemana
        case 3:
            diaDaSemana = 'Quarta';
            return diaDaSemana
        case 4:
            diaDaSemana = 'Quinta';
            return diaDaSemana
        case 5:
            diaDaSemana = 'Sexta';
            return diaDaSemana
        case 6:
            diaDaSemana = 'Sabado';
            return diaDaSemana
         default:
            diaDaSemana = 'erro';
            break
       }
}
const diaDaSemana = getDaysemana(diaSemana)

console.group(diaDaSemana);