const numeros = [5, 20, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 27]

const soma = numeros.reduce(function(acumulador,valor,){
    acumulador += valor
    return acumulador
},0)

const pares = numeros.reduce(function(acumulador,valor,){
   acumulador += valor
   return acumulador
},)

console.log(pares)
/*
const pessoas = [
    {nome: 'Luiz' , idade:62},
    {nome: 'Maria' , idade:23},
    {nome: 'Eduardo' , idade:65},
    {nome: 'Letícia' , idade:19},
    {nome: 'Rosana' , idade:32},
    {nome: 'Wallace' , idade:47},
];

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)
*/