/*
primitivos(imutáveis) - strings ,number,bolean,undefined,null,(bigint,symbol)

Referência(mutáveis) - arrays,funções,objetos
*/

//Referência a,b apontam para o mesmo valor na memória e são simultaneamente alterados

let a = [1,2,3]
let b = a
console.log(a,b)

a.push(4)
console.log(a,b)

b.pop()
console.log(a,b)