
let segundo = document.querySelector('#segundo')
let minuto = document.querySelector('#minuto')
let play = document.querySelector('#iniciar')
let pause = document.querySelector('#pausar')
let restart = document.querySelector('#zerar')
let clock = document.getElementById('relogio')

play.addEventListener('click', startClock)
pause.addEventListener('click', pauseClock)
restart.addEventListener('click',restartClock)

let sec = 0
let mnts = 0
let timer

function startClock(){
    clock.style.color = 'black'
    timer = setInterval(function() {
        sec++
        segundo.innerHTML = `0${sec}`

        if (sec === 60){
            
            segundo.innerHTML = "00"
            
            sec = 0
            mnts++

            minuto.innerHTML= `0${mnts}:`
        }
        zeroAEsquerda()
        clock.style.color = 'black'

    

    }, 1000);


}

function pauseClock() {

    clearInterval(timer)
    clock.style.color = 'red'
    
}

function restartClock(){
    clearInterval(timer)
    segundo.innerHTML = "00"
    minuto.innerHTML = '00:'
    clock.style.color = 'black'
}

function zeroAEsquerda(){
    if (sec > 9 ){
        segundo.innerHTML = `${sec}`
    }

    if ( mnts > 9  ){
        minuto.innerHTML = `${sec}`
    }
  
   
}

