function copos(x, y){
    return console.log(x - y)
};

//copos(5, 3)

function copos2(){
    const copo1 = 5;
    const copo2 = 3;

    const sobra = copo1 - copo2;
    console.log(`Sobraram ${sobra} ml de agua`);
}

copos2()

function salario(){
    const salarioMes = 1412;
    const horasTrabalhadas = 220

    const valor = 1412 / 220;
    console.log(`Salario hora = R$${valor.toFixed(2)}`)
}

salario()

function salario2(saldo, hora){
    const saldoHora = saldo / hora;
    console.log(`O seu salario/h é R$${saldoHora.toFixed(2)}`);
}

salario2(2500, 180);

