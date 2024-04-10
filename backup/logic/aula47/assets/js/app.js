function getTimeSeconds(s){
    const data = new Date(s * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const resetar = document.querySelector('.resetar');
let seconds = 0;
let timer;

function startSeconds (){
    timer = setInterval(function(){
        seconds++
        relogio.innerHTML = getTimeSeconds(seconds);
    }, 1000)
}

iniciar.addEventListener('click', function(e){
    relogio.classList.remove('paused')
    clearInterval(timer);
    startSeconds ();
});

pausar.addEventListener('click', function(e){
    relogio.classList.add('paused')
    clearInterval(timer);
});

resetar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    seconds = 0;
});