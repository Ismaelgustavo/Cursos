import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const chkMaius = document.querySelector('.chk-Maiusculas')
const chkMinus  = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const gerarSenha =document.querySelector('.gerar-senha')






export default () =>{
  gerarSenha.addEventListener('click' , () => {
    senhaGerada.innerHTML = gera()
  })
}

function gera(){
  const senha = geraSenha(
    qtdCaracteres.value ,
    chkMaius.checked,
    chkMinus.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  )
  return senha || 'nada selecionado'
}