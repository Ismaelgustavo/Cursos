let contador=0

let res = document.querySelector('Section#result')

function clique() {
    contador++
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}

function zerar() {
    contador = 0
    res.innerHTML = null
}