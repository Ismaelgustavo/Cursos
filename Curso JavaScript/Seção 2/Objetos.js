/*
// {}=> objetos    []=> array

// criando objeto
const pessoa1={
    nome: 'Luiz',
    sobrenome:'Miranda',
    idade:25
};
//acessando os valores dentro do objeto
console.log(pessoa1.nome)
*/
 
//criando objeto por funções
function criaPessoa(nome,sobrenome,idade){
    return { nome,sobrenome,idade };
}

const pessoa1 = criaPessoa('Luiz','Miranda',25)
const pessoa2 = criaPessoa('Ismael','Araújo',26)
const pessoa3 = criaPessoa('Vera','Araújo',55)

console.log(pessoa1)