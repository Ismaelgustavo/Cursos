const  numero = prompt('Digite um número')
const numeroTitulo = document.getElementById('numero-titulo')
const raiz = document.getElementById('raiz')
const inteiro = document.getElementById('inteiro')
const naN = document.getElementById('naN')
const arredondamentoBaixo = document.getElementById('arredondamentoBaixo')
const arredondamentoCima = document.getElementById('arredondamentoCima')
const casasDecimais = document.getElementById('casaDecimais')

numeroTitulo.innerHTML = numero
raiz.innerHTML = numero**0.5
inteiro.innerHTML = Number.isInteger(numero)
naN.innerHTML = Number.isNaN(numero)
arredondamentoBaixo.innerHTML = Math.floor(numero)
arredondamentoCima.innerHTML = Math.ceil(numero)
casasDecimais.innerHTML = (numero.toFixed(2))




/*
const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

*/

