// if, else, else if

const hora = 24;

/*if (hora >= 12){
    console.log('Boa tarde!');
}else {
    console.log('Vai se fuder');
}
*/

if (hora >=0 && hora <=11){
    console.log('Bom dia!');
}else if(hora >=12 && hora <=17){
    console.log('Boa tarde!');
}else if(hora >=18 && hora <=23){
    console.log('Boa noite!');
} else{
    console.log('VaiSeFuder');
}

/*function verificarIdade(idade){
    if(idade >=18 && idade <=25){
        console.log('Vocé é maior de idade');
    } else if (idade >=26 && idade <=40){
        console.log('Você é velho');
    }else {
        console.log('Quem é você parça');
    }
}
verificarIdade(65); */