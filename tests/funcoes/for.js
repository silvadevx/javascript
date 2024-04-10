//const nume = Number(prompt('Digite um valor numerico: '));

function contagem (nume){
    for(let i = 10; i >= nume; i--){
        console.log(i)
    }
}

 //contagem(nume)

const nomes = ['Lucas', 'Gabriel', 'Rafael', 'Felipe']

function nomesInfo(nomes){
    for(let i in nomes){
        console.log(nomes) //Recebendo o nome pelo seu indice
    }
}

nomesInfo(nomes);