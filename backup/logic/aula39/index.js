    let control = 0;  

    while(control <= 1) {
        console.log(control);
        control++; //Sempre adicionar o i++ para nao acontecer uma execução infinita
    }

function numberRandom (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = numberRandom(min, max);
console.log(rand)

while(rand !== 10){
    rand = numberRandom(min, max);
    console.log(rand);
}