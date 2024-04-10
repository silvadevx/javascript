const frutas = ['Pêra', 'Maçã', 'Uva']; // FOR IN -> lê os indeces ou chaves do objeto

for (let i in frutas) {
    //console.log(i)
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Otávio',
    idade: 21,
}

for (let i in pessoa){
    console.log(i, pessoa[i])
}