
function calcular(tipo,valor){
    if(tipo === 'acao'){
         
        if(valor === 'c'){
            document.getElementById('resultado').value = ''
        }
        if (valor === '+' || valor === '-' ||  valor === '*' || valor === '/' || valor === '.' ){
           document.getElementById('resultado').value += valor
        }
        if (valor === '='){
           let calculo = document.getElementById('resultado').value
           document.getElementById('resultado').value = eval(calculo)
        }

    }else{
        document.getElementById('resultado').value += valor
    }
}