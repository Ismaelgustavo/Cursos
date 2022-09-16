
function clique(){

    let nome = window.prompt('Olá digite seu nome')
    let res = window.document.querySelector('p#saudacao')
    res.innerHTML = `<p>Olá ${nome}!! Prazer te conhecer</p>`
}