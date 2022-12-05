const path = require('path')
const caminhoArquivo = path.resolve(__dirname , 'teste.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

/*
const pessoas =[
    {nome:'joao'},
    {nome:'isamel'},
    {nome:'eduardo'},
    {nome:'gustavo'}
]

const json = JSON.stringify(pessoas,'',2)
escreve(caminhoArquivo,json,{flag:'w'},(err) => {
    if (err)
          console.log(err);
        else {
          console.log("File written successfully\n")
    
        }
    })
*/

async function lerArquivo(caminho){
  const dados = await ler(caminho)
  renderizaDados(dados)
}


//const dadosArquivo = lerArquivo(caminhoArquivo)
//    .then(dados => console.log(dados))

function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(val => {
        console.log(val.nome)
    });
    
}

lerArquivo(caminhoArquivo)