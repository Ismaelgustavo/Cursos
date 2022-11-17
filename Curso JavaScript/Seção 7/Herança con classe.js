
class DispositoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar () {
        if (this.ligado){
            console.log(this.nome + ' já ligado')
            return
        }
        this.ligado = true
    }

    desligar() {
        if (!this.desligado){
            console.log(this.nome + ' já desligado')
            return
        }
        this.ligado = false
    }
}

class Smarthphone extends DispositoEletronico {
    constructor(nome,cor,modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smarthphone('Samsung','Preto','Galaxy S10')
s1.ligar()
s1.ligar()
console.log(s1)