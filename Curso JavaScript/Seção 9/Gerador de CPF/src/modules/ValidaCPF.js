export default class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo',{
            writable:false,
            enumerable:true,
            configurable:false,
            value: cpfEnviado.replace(/\D+/g,'')
        })
    }

    valida(){
        if(!this.cpfLimpo) return false
        if(this.cpfLimpo.length !== 11) return false
        //return('cheguei aqui')
        const cpfParcial = this.cpfLimpo.slice(0,-2)
        const digito1 = ValidaCPF.confereDigito(cpfParcial)
        const digito2 = ValidaCPF.confereDigito(cpfParcial + digito1)

        const cpfConferido = cpfParcial + digito1 + digito2
        return cpfConferido === this.cpfLimpo
        
    }

    static confereDigito(cpfParcial){
        let total = 0
        let reverso = cpfParcial.length + 1
        
        for(let stringNumerica of cpfParcial){
            total += reverso * Number(stringNumerica)
            reverso--
        }
        
        const digito = 11 - (total % 11)
        return digito > 9 ?'0' : String(digito)

    }
}

const cpf = new ValidaCPF('134.311.146-36')
if (cpf.valida()){
    console.log('CPF Válido')
} else {
    console.log('CPF Inválido')
}

console.log('cheguei aqui')