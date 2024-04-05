let numero = Number(prompt('Digite um numero: '));
const numberOne = document.getElementById('number-one');
const texto = document.getElementById('texto');
const raiz = document.getElementById('raiz-quadrada');
const inteiro = document.getElementById('num-inteiro');
const not = document.getElementById('not-number');
const up = document.getElementById('up-number');
const lower = document.getElementById('lower-number');


numberOne.innerHTML = numero;
raiz.innerHTML = `<p>Raiz quadrada: ${numero ** (1/2)} <br><p/>`;
inteiro.innerHTML = `<p> ${numero} É inteiro?: ${Number.isInteger(numero)}<p/>`;
not.innerHTML = `<p> ${numero}É NaN?: ${Number.isNaN(numero)}<p/>`;
up.innerHTML = `<p>Arredondano para baixo: ${Math.floor(numero)}<p/>`;
lower.innerHTML = `<p>Arrendondando para cima: ${Math.ceil(numero)}<p/>`;
texto.innerHTML += `Com duas casas decimais ${numero.toFixed(2)}`;