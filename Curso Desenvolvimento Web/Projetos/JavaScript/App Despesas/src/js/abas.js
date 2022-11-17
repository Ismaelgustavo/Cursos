function abreAbas(){

    const aba = document.querySelector('#div2')
    if(aba.style.display == 'block'){
        aba.style.display = 'none'
    } else {
        aba.style.display = 'block'
    }


}

function abrirModal(){
    const modal = document.querySelector('.janela-modal')
    modal.classList.add('abrir')
}

function fecharModal() {
    const modal = document.querySelector('.janela-modal')
    modal.classList.remove('abrir')
}

function moldalErro(){
    const modal = document.querySelector('.janela-modal')
    let txt1 = document.querySelector('#p1')
    let txt2 = document.querySelector('#p2')
    let btn = document.querySelector('#btn-voltar')
    modal.classList.add('abrir')
    txt1.style.color = 'red'
    txt1.innerHTML = 'Erro na gravação'
    txt2.innerHTML = 'Existem campos que não foram preechidos'
    btn.style.backgroundColor = 'red'

}