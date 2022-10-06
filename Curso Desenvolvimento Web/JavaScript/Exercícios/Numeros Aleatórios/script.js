
let btn = document.querySelector('button')
let getInput = document.getElementById('txt')
let msg = document.getElementById('mensagem')

btn.addEventListener('click', showNumber)


let rdn = Math.floor(Math.random()*101)

function showNumber(){
    let input = getInput.value
        console.log(rdn)
        if (input < rdn ){
            msg.innerHTML = 'maior'
            
        }else if (input > rdn){
            msg.innerHTML = 'menor'

        }else{
            msg.innerHTML = 'acertou'
        }
    }
     
