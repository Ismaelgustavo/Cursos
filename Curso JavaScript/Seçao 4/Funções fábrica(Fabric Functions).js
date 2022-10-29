function criaPessoa(nome,sobrenome,a,p) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala: function(assunto){
            return `${this.nome} está ${assunto}`
        },
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('luiz','otávio', 1.8 , 80)
//console.log (p1.imc())
p1.nomeCompleto= 'Ismael Gustavo Araújo'
console.log(p1.nome) 
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)
//console.log(p1.fala('falando sobre JS'))


this.confereNota =()=> {
    let i = 1
    while(i < alunos.length){
        if(alunos.length >= 60 ){
            return display.innerHTML ='Aprovado'
        }else{
            return display.innerHTML ='Reprovado'
        }
    }

}

if(alunos[i] >= 60){
    this.display.innerHTML = 'Aprovado'
    aprovados++
}else {
    this.display.innerHTML = 'Reprovado'