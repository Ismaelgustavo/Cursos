function Produto(nome,preco,estoque){
    this.nome=nome
    this.preço=preco

    Object.defineProperty(this,'estoque',{
        enumerable: true, //mostra a chave
        value:estoque,
        writable:false, //controla alteração do valor
        configurable:true // configurável

    }) 

    Object.defineProperties(this,{
        nome:{
            enumerable: true, //mostra a chave
            value:estoque,
            writable:false, //controla alteração do valor
            configurable:true // configurável
        },

        preco:{
            enumerable: true, //mostra a chave
            value:estoque,
            writable:false, //controla alteração do valor
            configurable:true // configurável
        },
    })

}

const p1 = new Produto('Camiseta', 20, 3)