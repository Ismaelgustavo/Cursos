// escreva uma função que recebe 2 números e retorne o maior deles

const primeiroNumero = Math.floor(Math.random()*101)
const segundoNumero = Math.floor(Math.random()*101)

console.log(primeiroNumero,segundoNumero)

function comparaçao(primeiroNumero,segundoNumero){
    return primeiroNumero > segundoNumero
   
    //if (primeiroNumero > segundoNumero) return true
    //else return false
}


if (comparaçao(primeiroNumero,segundoNumero) && true){
    console.log(`${primeiroNumero} é maior que ${segundoNumero}`)
}
else{
    console.log(`${segundoNumero} é maior que ${primeiroNumero}`)
}


