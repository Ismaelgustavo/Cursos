const form = document.querySelector('#formulario')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const inputCarro = e.target.querySelector('#carro')
    const inputAno = e.target.querySelector('#ano')

    const valorCarro = Number(inputCarro.value)
    const ano=Number(inputAno.value)

    if(ano <= 2000){
        const desconto = calculoAte2000(valorCarro) 
        const valorTotal = valorCarro-desconto
        console.log(valorTotal)
        const msg = `<p>O valor de desconto é:${desconto}</p>
        <p>O valor a ser pago é:${valorTotal}</p>`
        setResultado(msg)
        const btn=`<div class="botoes"><button onclick="clique1()">Continuar calculando?</button> <button onclick="clique2()" >Parar</button></div>`
        botoes(btn)
    
    

    }
    else(ano > 2000);{
        const desconto = calculoAcima2000(valorCarro) 
        const valorTotal = valorCarro-desconto
        console.log(valorTotal)
        const msg = `<p>O valor de desconto é:${desconto}</p>
        <p>O valor a ser pago é:${valorTotal}</p>`
        setResultado(msg)
        const btn=`<div class="botoes"><button>Continuar calculando?</button> <button>Parar</button></div>`
        botoes(btn)
    
    }
    if (clique1){
        somatoria(totalGeral)
        totalGeral = clique1(valorTotal)
        e()
    


    
    
     
     
   

});

function calculoAte2000(valorCarro){
    const total = valorCarro*(12/100)
    return total
}

function calculoAcima2000(valorCarro){
    const total = valorCarro*(7/100)
    return total
}

function criaP(){
    const p = document.createElement('p');
    return p
}
function setResultado(msg){
    const resultado =document.querySelector('#resultado')
    resultado.innerHTML= ''
    resultado.innerHTML = msg
    
}function botoes(btn){
    const botoes =document.querySelector('#botoes')
    botoes.innerHTML= ''
    const p= criaP()
    p.classList.add('botoes')
    botoes.innerHTML = btn
    var button = document.createElement('button');
    button.setAttribute('type','button')
    botoes.appendChild(btn);
    }
   
}
function clique1(valorTotal){
      
    let totalGeral = totalGeral + valorTotal
    return totalGeral
}
function somatoria(totalGeral){
    const total =document.querySelector('#somatoria')
    total.innerHTML=`Total geral:${totalGeral}`

}

