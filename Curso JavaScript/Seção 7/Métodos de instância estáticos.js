class ControleRemoto {
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    // método de instancia
    aumentarVolume(){
        this.volume += 2
    }
    // método de instancia
    diminuirVolume(){
        this.volume -= 2
    }
    //metodo estático
    static trocaPilha(){
        console.log('Ok')
    }
}

const controle1 = new ControleRemoto('LG')
// método de instancia
controle1.aumentarVolume()
//metodo estático
ControleRemoto.trocaPilha()
console.log(controle1)