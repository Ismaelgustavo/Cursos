 let getEmail = document.getElementById('criaEmail')
 let getSenha = document.getElementById('criaSenha')
 let submit = document.getElementById('cadastrar')

 submit.addEventListener('click' ,saveDados)


 function saveDados(){

 let email = getEmail.value 
 let senha = getSenha.value 

window.localStorage.setItem('email',email)
window.localStorage.setItem('senha',senha)

window.location.href = 'index.html'

}



