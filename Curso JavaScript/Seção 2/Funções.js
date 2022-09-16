const raiz = function(n){
    return n**0.5
}; // NESSE TIPO DE DECLARAÇÃO DE FUNÇÃO PRECISA FINALIZAR COM PONTO E VÍRGULA

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

/*
função acima simplificada
const raiz = n => n ** 0,5; (arrow function)

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))
*/



/*
//function soma(valor1 = 1,valor2 = 1) caso eu não envie parâmetros a função assume esses valores
function soma(valor1 = 1,valor2 = 1){
    const resultado = valor1+valor2
    return resultado
}

const idade = 10 + soma(2,2)
console.log(idade)
*/


/*
function saudacao(nome){
    return (`Bom Dia ${nome}`)
}

const variavel=saudacao('Luiz')
console.log(variavel)
*/