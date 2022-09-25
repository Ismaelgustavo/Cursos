function digitacao(){
    document.getElementById('input').style.background ='yellow'
}

function perdeFoco(){
    let valor = document.getElementById('input').value
    let txt = valor.length
    
    if ( txt < 3) {
        document.getElementById('input').style.background = 'red'
    } else {
        document.getElementById('input').style.background = 'green'
    }

    
}