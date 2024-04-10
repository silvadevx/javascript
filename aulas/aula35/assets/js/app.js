 const elemento = [
     {tag: 'p', texto: 'Frase  1'},
     {tag: 'div', texto: 'Frase 2'},
     {tag: 'footer', texto: 'Frase 3'},
     {tag: 'section', texto: 'Frase 4'} //Array com objetos dentro dele
 ]

 const container = document.querySelector('.container');
 const div = document.createElement('div'); //criando um elemento dentro do "index.html"

for(let i = 0; i < elemento.length; i++){
    const {tag, texto} = elemento[i]; //desestruturando o obejeto
    const createTag = document.createElement(tag);
    createTag.innerHTML = texto;
    // createTag.innerText = texto; pode ser usada quando for apenas texto ao inves de tags
    div.appendChild(createTag); // Elemento criado dentro do documento
    
}

container.appendChild(div); // exibindo o objeto elemento 
