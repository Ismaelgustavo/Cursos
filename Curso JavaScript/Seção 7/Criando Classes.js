class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log('falando')
    }
    beber(){
        console.log('falando')
    }
}



const p1 = new Pessoa('Ismael','Araújo')
p1.beber()