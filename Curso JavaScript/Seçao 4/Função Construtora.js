function Pessoa(nome,sobrenome){
    // atributos ou métodos privados
    const ID = 1234
    const metodoInterno = function(){

    }
    
    // atributos ou métodos públicos
    this.nome = nome
    this.sobrenome =sobrenome

    this.metodo = function(){
        console.log(this.nome + ': sou um método')
    }
}
const p1 = new Pessoa('luiz','Otavio')
const p2 = new Pessoa('Ismael','Araújo')

console.log(p2.nome)
p2.metodo()