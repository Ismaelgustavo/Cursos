
 function tabuada(){
    let getInput = document.querySelector('#input')
    let showResult = document.querySelector('#result')
     for(let i = 0 ; i <= 10 ; i++){
        let p = document.createElement('p')
        p.innerText = getInput.value* i
        showResult.appendChild(p)

     }
}