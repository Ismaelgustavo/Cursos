//fetch('pessoas.Json')
 // .then(resposta => resposta.json())
 // .then(json => carregaElementosNaPagina(json))

 axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))

  function carregaElementosNaPagina(json){
    const table = document.createElement('table')
    for(let pessoa of json){
      let linhas = table.insertRow()
      linhas.insertCell(0).innerHTML = pessoa.nome 
      linhas.insertCell(1).innerHTML = pessoa.idade
      linhas.insertCell(2).innerHTML = pessoa.salario
      }
      const resultado = document.querySelector('.resultado') 
      resultado.appendChild(table)
}
  



