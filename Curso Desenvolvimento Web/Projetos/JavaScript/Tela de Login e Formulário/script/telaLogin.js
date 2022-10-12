
let login = document.getElementById('login')
let emailLogin = document.getElementById('setEmail')
let senhaLogin = document.getElementById('setSenha')
let alerta = document.getElementById('alertEmail')
let alerta2 = document.getElementById  ('alertSenha')

login.addEventListener('click', logOn)


let emailValidacao = false
let senhaValidaçao = false
let emailSalvo = window.localStorage.getItem('email')
let senhaSalva = window.localStorage.getItem('senha')


function logOn(){ 
    
    if (emailLogin.value === emailSalvo){
        emailValidacao = true
    } else {
        alertEmail()
    }

    if (senhaLogin.value === senhaSalva){
        senhaValidaçao = true
    } else {
        alertSenha()
    }

    if (senhaValidaçao === true && emailValidacao === true){
        window.location.href = 'paginaLogada.html'
    }

    console.log(emailValidacao,emailSalvo,senhaSalva)

}

function alertEmail(){
    alerta.style.color = 'red'
    alerta.innerHTML = 'Insira um e-mail válido'

}

function alertSenha() {
    alerta2.style.color = 'red'
    alerta2.innerHTML = 'Insira uma senha válida'
}

function limpa(){
    alerta.innerHTML = ''
}

function limpaSenha() {
    alerta2.innerHTML = ''
}