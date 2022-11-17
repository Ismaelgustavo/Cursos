function cadastrarDespesas(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano,mes,dia,tipo,descricao,valor)  
    if(validacao(despesa)) {
        bd.gravar(despesa)
        abrirModal()
    } else {
        //abrirModal()
        moldalErro()
    }
    
}

class Despesa {
    constructor(ano,mes,dia,tipo,descricao,valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }



}

class Bd{
    constructor(){
        let id = localStorage.getItem('id')
        if (id === 'null'){
            localStorage.setItem('id',0)
        }
    }

    proximoId(){
        let proximoId = localStorage.getItem('id')
        return Number(proximoId) + 1

    }

    gravar(d){
        let id = this.proximoId()
        localStorage.setItem('id' , id)
        localStorage.setItem(id, JSON.stringify(d))
        valor.value = ''
        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = 'Tipo'
        descricao.value = ''
    }

   recuperarTodosRegistros(){

    let arrayDespesas = Array()
    let id = localStorage.getItem('id')
    for(let i = 1; i <= id; i++){
        let despesa = JSON.parse(localStorage.getItem(i))
        if(despesa === null){
            continue
        }
        
        despesa.id = i
        arrayDespesas.push(despesa)
    }

    return arrayDespesas

   }

   pesquisar(despesa){
    let despesasFiltradas = Array()
    despesasFiltradas = this.recuperarTodosRegistros()
    console.log(despesasFiltradas)
    console.log(despesa)
    if(despesa.ano != ''){
        despesasFiltradas =  despesasFiltradas.filter(d => d.ano == despesa.ano);
    }
    if(despesa.mes != ''){
        despesasFiltradas =  despesasFiltradas.filter(d => d.mes == despesa.mes);
     }
     if(despesa.dia != ''){
        despesasFiltradas =  despesasFiltradas.filter(d => d.dia == despesa.dia);
     }
     if(despesa.tipo != ''){
        despesasFiltradas =  despesasFiltradas.filter(d => d.tipo == despesa.tipo);
     }
     if(despesa.descricao != ''){
        despesasFiltradas =  despesasFiltradas.filter(d => d.descricao == despesa.descricao);
     }
     if(despesa.valor != ''){
        despesasFiltradas =  despesasFiltradas.filter(d => d.valor == despesa.valor);
     }


     return despesasFiltradas


   }

   remover(id){
    localStorage.removeItem(id)
   }

}

let bd = new Bd

function validacao(d){
    for(let i in d){
        if(d[i] === '' || d[i] === undefined || d[i] === null ){
            return false
        }
    
    }
   return true
}

function carregaListaDespesa(){

    let despesas = Array()
    despesas = bd.recuperarTodosRegistros()
    let listaDespesa = document.querySelector('#listaDespesa')
    despesas.forEach(function(d){
        let linha = listaDespesa.insertRow()

        linha.insertCell(0).innerHTML = d.dia + '/' + d.mes + '/' + d.ano;
        switch(d.tipo){
            case '1': d.tipo = 'Alimentação'
            break
            case '2': d.tipo = 'Educação'
            break
            case '3': d.tipo = 'Lazer'
            break
            case '4': d.tipo = 'Saúde'
            break
            case '5': d.tipo = 'Transporte'
            break
        }
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = 'R$' + d.valor 
        let btn = document.createElement ('button')
        btn.className = 'btn btn-danger'
        btn.innerHTML = `<span class="material-symbols-outlined">
        delete
        </span>`
        btn.id = d.id
        btn.onclick = function (){
            bd.remover(this.id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)

    })
}

function pesquisarDespesa(){
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano,mes,dia,tipo,descricao,valor)  

    let despes = bd.pesquisar(despesa)

    //despes = bd.recuperarTodosRegistros()
    let listaDespesa = document.querySelector('#listaDespesa')
    listaDespesa.innerHTML = ''
    despes.forEach(function(d){
        let linha = listaDespesa.insertRow()

        linha.insertCell(0).innerHTML = d.dia + '/' + d.mes + '/' + d.ano;
        switch(d.tipo){
            case '1': d.tipo = 'Alimentação'
            break
            case '2': d.tipo = 'Educação'
            break
            case '3': d.tipo = 'Lazer'
            break
            case '4': d.tipo = 'Saúde'
            break
            case '5': d.tipo = 'Transporte'
            break
        }
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = 'R$' + d.valor
        let btn = document.createElement ('button')
        btn.className = 'btn btn-danger'
        btn.innerHTML = `<span class="material-symbols-outlined">
        delete
        </span>`
        btn.id = d.id
        btn.onclick = function (){
            bd.remover(this.id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)

    })

}



