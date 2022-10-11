const mosca = document.getElementById('mosquito1')
const criaImg = document.createElement('img')




let altura = 0
let largura = 0
let contador = 0
vidas = 1
let sec = 99

let level = window.location.search
level = level.replace('?','')
level = Number(level)



let timer = setInterval( function() {
    posiçaoAleatoriaImg()
    if(contador > 1 ){
        document.getElementById('img'+ vidas).src = 'imagens/coracao_vazio.png' 
        vidas++   
    }

},level);

if (vidas === 3){
    window.location.href = 'gameOver.html'
}


function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight        
    largura = window.innerWidth
    console.log(altura,largura)
}

ajustaTamanhoPalcoJogo()
relogio()



// gera posiçao aleatória da imagem
function posiçaoAleatoriaImg(){
    contador++
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoy = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoy = posicaoy < 0 ? 0 : posicaoy
    
    console.log(posicaoX,posicaoy)
        
        criaImg.src ='imagens/mosca.png'
        criaImg.className = tamanhoAleatorio()
        criaImg.style.left = posicaoX  + 'px'
        criaImg.style.top = posicaoy + 'px'
        criaImg.style.position =  'absolute'
        criaImg.setAttribute('onclick','disparaConsole()')
        criaImg.onclick = function (){
            this.remove()
            contador = 0
        }
        document.body.appendChild(criaImg)
        if (vidas === 3){
            clearInterval(timer)
            window.location.href = 'gameOver.html'
        }
        

        


}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'
            
        case 2:
            return 'mosquito3'    
    }
}

//coloca relogio na tela

function relogio (){
    setInterval( function() {
        sec--
        document.getElementById('segundos').innerHTML = sec
        if (sec === 0) {
            window.location.href = 'vitoria.html'
        }
    }, 1000);
}




