/*
const nome = 'Ismael'
const sobrenome = 'Miranda'

const falaNome = () =>{
    console.log(nome,sobrenome)
}

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
*/
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}
exports.Pessoa = Pessoa
