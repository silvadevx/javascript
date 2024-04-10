function imc(){
    const form = document.querySelector('.container-form');
    const result = document.querySelector('.result')

    function receberEvento(event){
        event.preventDefault();

        const peso = document.querySelector('#peso1');
        const altura = document.querySelector('#altura1');
        const calcImc = peso.value / (altura.value * altura.value); 

            function calcularMassa(calcImc){
                if(calcImc <= 18.5){
                    return 'Magro';
                } else if(calcImc >= 18.6 && calcImc <= 24.9){
                    return 'Normal';
                } else if(calcImc >= 25 && calcImc <= 29.99 ){
                    return 'Ta gordinho em';
                } else if (calcImc >= 30 && calcImc <= 34.9){
                    return 'I a dieta, nada ainda?';
                } else if (calcImc >=35 && calcImc <=39){
                    return 'Ta virando um projetinho dela?';
                } else if(calcImc > 40){
                    return 'THAAAAIIIIIISSSSSSS CAAAAAARLAAAAAAAA';
                } else {
                    return 'Quem me fez é um animal KKKKKK';
                }
            }
            console.log(calcImc);
            
            
            result.innerHTML += `<p>Sua massa corporal é ${calcImc.toFixed(2)} ${calcularMassa(calcImc)}<p/>`; 
        }

    form.addEventListener('submit', receberEvento);
}

imc();