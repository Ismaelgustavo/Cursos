function criaPessoa(nome,sobrenome){
   const pessoaPrototype = {
    falar(){
        console.log(`${this.nome} está falando`)
    }
   }
   
    return Object.create(pessoaPrototype {
        nome:{value:nome},
        sobrenome:{value:sobrenome}
    })
}

const p1 = criaPessoa('Ismael','Gustavo')
console.log(p1)