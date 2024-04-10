//Capturando evento de submit do formulario
const form = document.querySelector('.container-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const selecionaPeso = e.target.querySelector('#peso1');
    const selecionaAltura = e.target.querySelector('#altura1');

    const peso = Number(selecionaPeso.value);  // alterando os valores para number
    const altura = Number(selecionaAltura.value);
    
    if (!peso){ // ! -> peso não
        setResultado('Peso invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `seu IMC é ${imc} ${nivelImc}`;
    setResultado(msg, true);
})

function getNivelImc(imc) {
    const nivel = ['abaixo do peso', 'peso normal,', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];
    if (imc >= 39.9) return nivel [5];
    if (imc >= 34.9) return nivel [4];
    if (imc >= 29.9) return nivel [3];
    if (imc >= 24.9) return nivel [2];
    if (imc >= 18.5) return nivel [1];
    if (imc < 18.5) return nivel [0]
}

function getImc(peso, altura){
    const imc = peso / altura ** 2
    return imc.toFixed(2);
}

function criaParagrafo(){
    const p = document.createElement('p'); // A tag foi criada apenas na memoria
    //p.classList('paragrafo-resultado') //adiciona uma classe no paragrafo criado
    return p;
}

function setResultado (msg, valid) {
    const resultado = document.querySelector('.result');
    resultado.innerHTML = ''; //Zera o elemento
    const p = criaParagrafo();
    if (valid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}