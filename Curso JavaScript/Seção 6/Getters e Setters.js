function Produto(nome,preco,estoque){
    this.nome=nome
    this.preço=preco

    let estoquePrivado = estoque

    Object.defineProperty(this,'estoque',{
        enumerable: true, //mostra a chave
        configurable:true, // configurável
        get: function(){
            return estoquePrivado
        },
        set:function(valor) {
            if(typeof valor !== 'number'){
                console.log('errado')
                return
            }
            estoquePrivado = valor
        }

    }) 

}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 500
console.log(p1.estoque)