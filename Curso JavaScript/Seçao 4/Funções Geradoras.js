function* geradora1 (){
   //Código qualquer
    yield 'valor1'
     //Código qualquer
     yield 'valor2'
      //Código qualquer
    yield 'valor3'
}

const g1 = geradora1()
console.log(g1.next().value)
console.log(g1.next().value)