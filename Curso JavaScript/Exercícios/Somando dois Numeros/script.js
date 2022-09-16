 function clique(){
    
    let number1 = prompt('Digite um número')
    let number2 = prompt('Digite outro número')
    res = document.querySelector('p#texto')
    res.innerHTML = `A soma entre ${number1} e ${number2} é igual a ${parseInt(number1)+parseInt(number2)} `

 }