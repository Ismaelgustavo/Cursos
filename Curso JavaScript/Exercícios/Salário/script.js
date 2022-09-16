const form=document.querySelector('#formulario')

form.addEventListener('submit',function (e){
    e.preventDefault()
    
    const nome = e.target.querySelector("#nome").value
    const inputSalario = e.target.querySelector('#salario')
    const inputVendas = e.target.querySelector('#vendas')

    salario=Number(inputSalario.value)
    vendas=Number(inputVendas.value)

    const comissao=calculoComissao(vendas)
    
    const salarioTotal = salario + comissao

    const msg = `<p>Nome:${nome} <br></p>
    <p>Salário fixo:${salario} <br></p>
    <p>Salario total:${salarioTotal} <br></p>`
    
    resultado(msg)

})

function calculoComissao(vendas){
    const total = vendas*(15/100)
    return total
}

function resultado(msg){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = msg
}