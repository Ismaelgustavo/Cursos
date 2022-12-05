/*
const fs = require('fs').promises
const path = require('path')
const caminhoArquivo = path.resolve(__dirname ,'..', 'teste.json')

const pessoas =[
    {nome:'joao'},
    {nome:'isamel'},
    {nome:'eduardo'},
    {nome:'gustavo'}
]

const json = JSON.stringify(pessoas,'',2)

fs.writeFile(caminhoArquivo,json,{flag:'w'},(err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n")
    }  
})
*/
const fs = require('fs').promises
module.exports = (caminho,dados) => {
    fs.writeFile(caminho,dados,{flag:'w'},(err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n")
    
        }  
     })          
}

