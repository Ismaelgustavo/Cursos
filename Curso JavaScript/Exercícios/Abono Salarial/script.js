function criaPessoa(){
    return{
        getNome:document.querySelector('#nome'),
        getSexo:document.querySelectorAll('input[name="sexo"]'),
        getSalario:document.querySelector('#salario'),
        btn:document.querySelector('#enviar'),
        resposta:document.querySelector('#resposta'),
        getIdade:document.querySelector('#idade'),

        
        

        click(){
            this.btn.addEventListener('click' ,(e) =>{
                e.preventDefault()
                let sexoSelecionado
                let salario = Number(this.getSalario.value)
                let idade = Number(this.getIdade.value)
                let nome = this.getNome.value
                for(let radioButton of this.getSexo){
                    if(radioButton.checked){
                        sexoSelecionado = radioButton.value         
                    }
                }

                //this.resposta.innerHTML = `${nome}${idade}${salario}${sexoSelecionado}`

                if(sexoSelecionado == "masculino" && idade >= 30){
                    salario = salario + 100
                } else if (sexoSelecionado == "masculino" || idade < 30) {
                    salario = salario + 50
                }

                if (sexoSelecionado == "feminino" && idade >= 30){
                    salario = salario + 200
                } else {
                    salario = salario + 80
                }

                this.resposta.innerHTML = `${nome}<br/> Salário líquido:${salario}`

            })

        },

        inicia(){
            this.click()
        }
        

    }
}

let pessoa = criaPessoa()
pessoa.inicia()
