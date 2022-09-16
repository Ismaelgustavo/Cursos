//const nome='Ismael Araújo'
  const nomes = ['Ismael','Leandro','Gustavo']

//for (let valor of nome){
//    console.log(valor)
//}

for(let letra of nomes){
    console.log(letra)
}

nomes.forEach(function(valor,indice,array){
    console.log(valor,indice,array)
})

// for clássico - geralmente com iteráveis(array ou strings)
// for in -retorna índice ou chaves (strings,array ou objetos)
// for of - retona o valor em si (iteraveis,arrays ou strings)