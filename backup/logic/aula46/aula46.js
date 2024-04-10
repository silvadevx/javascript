//setinterval e setTimeout

function hideHour(){
    let hour = new Date();

    return hour.toLocaleTimeString('pt-br', {hour12: false});
}

const timer = setInterval(function(){
    console.log(hideHour());
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 10000);