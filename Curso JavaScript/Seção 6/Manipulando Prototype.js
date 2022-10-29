function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco*(percentual/100))
}

Produto.prototype.aumenta = function(percentual){
    this.preco = this.preco + (this.preco*(percentual/100))
}

const p1 = new Produto('Camiseta',500)

const p2 = {
    nome:'Caneca',
    preco:15
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumenta(50)
p1.desconto(50)

const p3 = Object.create(Produto.prototype)
p3.preco = 113
p3.aumenta(10)
console.log(p3)



