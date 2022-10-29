// function expression
const dados = function () {
    console.log('dado')
}
 dados()

 function executaFuncao(funcao){
    funcao()
 }

 executaFuncao(dados)

 // Arrow function

 const funcaoArrow = () => {
    console.log('arrow function')
 }

 funcaoArrow()

 // dentro de um objeto

 const obj = {
    falar: function (){
        console.log('falando...')
    }
 }

 obj.falar()