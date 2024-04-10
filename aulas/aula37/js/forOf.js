const nome = ['Lucas', 'Marques', 'Silva']
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]) //Ira retornar o indice de cada letra da string "nome";
}

for (let i in nome){
    console.log(nome[i])
}

for(let valor of nome){ //O for of ira retornar o valor diretamente, ao inves do indice
    console.log(valor);
}

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})

// For classico -> geralmente com iteraveis (array ou string)
// For in -> retorna o indice ou chave (string, array ou objetos);
// for of -> retorna o valor em si (iteraveis, strings ou arrays);