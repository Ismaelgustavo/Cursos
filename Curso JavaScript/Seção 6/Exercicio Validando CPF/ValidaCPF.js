function ValidaCPF(cpfEnviado){

    Object.defineProperty(this,'cpfLimpo', {
        get:function(){
            return cpfEnviado.replace(/\D+/g,'')
        }
    })

}
ValidaCPF.prototype.valida = function(){
    if(this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0,-2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const cpfConferido = cpfParcial + digito1 + digito2
    return cpfConferido === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    let contadorRegressivo = cpfArray.length + 1
    const cpfReduzido = cpfArray.reduce((ac,val)=>{
        ac += contadorRegressivo * Number(val)
        contadorRegressivo--
        return ac
        
    },0)

    const digito = 11 - (cpfReduzido % 11)
    return digito > 9 ?'0' : String(digito)

}

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF('705.484.450-52')
if (cpf.valida()){
    console.log('CPF Válido')
} else {
    console.log('CPF Inválido')
}