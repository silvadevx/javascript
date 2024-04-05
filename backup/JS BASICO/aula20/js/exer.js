function form(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    /*const dadosPessoa = {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura,
    }; */
    
    function receberEventoForm(event) {
        event.preventDefault();

       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');

       pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });

       console.log(pessoas);

       resultado.innerHTML += `<p>O seu nome é ${nome.value}<p/>`;
       resultado.innerHTML += `<p>O seu sobrenone ${sobrenome.value}<p/>`;
       resultado.innerHTML += `<p>O seu peso é ${peso.value} kilos<p/>`;
       resultado.innerHTML += `<p>A sua altura é ${altura.value}<p/>`;
    };

    form.addEventListener('submit', receberEventoForm);
}
form();
