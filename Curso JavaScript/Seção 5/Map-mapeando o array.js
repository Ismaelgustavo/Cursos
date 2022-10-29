const numeros = [5, 20, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 27]
const numerosEmDrobro=numeros.map(function(valor){
    return valor * 2
})
//console.log(numerosEmDrobro)

const pessoas = [
    {nome: 'Luiz' , idade:62},
    {nome: 'Maria' , idade:23},
    {nome: 'Eduardo' , idade:55},
    {nome: 'Letícia' , idade:19},
    {nome: 'Rosana' , idade:32},
    {nome: 'Wallace' , idade:47},
];

const nomes = pessoas.map(obj => obj.nome)
const idade = pessoas.map(function(obj){
    return {idade:obj.idade}
})
const id = pessoas.map(function(obj,indice){
    obj.id = indice + 1
    return obj
})
console.log(id)