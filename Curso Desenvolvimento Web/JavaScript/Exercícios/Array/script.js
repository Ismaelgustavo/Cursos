
let objetos = Array('Cadeira','Impressora','Garfo')
let paragrafo =  document.getElementById('resultado')

function adicionar(){
    let getInput = document.getElementById('text')
    valor = getInput.value
    //console.log(valor)

    if (valor === ''){
        paragrafo.innerHTML ='Informe um valor Válido'
        getInput.addEventListener('click', clearInput)

        function clearInput(){
            paragrafo.innerHTML = ''
        }        

    } else {
        if ( objetos.indexOf(valor) !== -1) {
            paragrafo.innerHTML = 'Objeto já foi adicionado'

            getInput.addEventListener('click', clearInput)

            function clearInput(){
                paragrafo.innerHTML = ''
    
            }

        } else {
            objetos.unshift(valor)
            console.log(objetos)
        }
    
    }
}


function ordenar(){
    objetos.sort()
    console.log(objetos)
}
