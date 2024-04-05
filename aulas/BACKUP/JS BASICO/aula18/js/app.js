const array = [1, 2, 3];
array.push(4);
array[0] = '5';

console.log(array);

// Criando um objeto

const pessoa = {
    //atributos do objeto
    nome: 'Lucas',
    sobrenome: 'Marques',
    idade: 21,

    //Método
    fala(){
        console.log('Ai papai');
    },

    fala2(){
        console.log(`${this.nome} ${this.sobrenome} esta dizendo oi....`)
    },

    fala3(){
        console.log(`A minha idade é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++
    }
};

console.log(pessoa);

function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    }
}

const pessoa2 = criaPessoa('Lucas,', 'Gabriel', 32);// dentro dos parenteses vai o argumento para os parametros da função
console.log(pessoa2);

const pessoa3 = criaPessoa('Alessandra', 'Souza', 56);
console.log(pessoa2.nome, pessoa3.nome);

pessoa.fala();
pessoa.fala3();
pessoa.incrementaIdade();
pessoa.fala3();

