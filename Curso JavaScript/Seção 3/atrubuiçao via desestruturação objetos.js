const pessoa={
    nome:'Luiz',
    sobrenome:'Miranda',
    idade:30,
    endereço:{
        rua:'av Brasil',
        numero:320,
    }
};
// atribuição via desestruturação
const {nome ='',sobrenome,endereço:{rua}} = pessoa
console.log(nome,rua)
//const {nome,...resto}
//console.log(nome,resto)