//const numeros = [5, 20, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 27]

//function callbackFilter(valor,indice,array){
//   return valor > 10
//    
//}
//const numerosFiltradros = numeros.filter(valor => valor > 10 )
//console.log(numerosFiltradros)

const pessoas = [
    {nome: 'Luiz' , idade:62},
    {nome: 'Maria' , idade:23},
    {nome: 'Eduardo' , idade:55},
    {nome: 'Letícia' , idade:19},
    {nome: 'Rosana' , idade:32},
    {nome: 'Wallace' , idade:47},
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
const pessoasVelhas = pessoas.filter(obj => obj.idade > 50)
const nomeTerminaA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))

console.log(pessoasNomeGrande)
console.log(pessoasVelhas)
console.log(nomeTerminaA)