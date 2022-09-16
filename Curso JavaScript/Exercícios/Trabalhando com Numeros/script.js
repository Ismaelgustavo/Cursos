alert('Olá seja bem-vindo')

function inicio(){

    let n = window.prompt('Digite um Número')
    let res = document.getElementById('texto')
    res.innerHTML = `O dobro de ${n} é ${n*2} e a metade é ${n/2}!`
    

}