
function clique (){
    
    let abastecimento = Number(prompt('digite quantos reais vc vai abastecer'))
    let carro = 20
    let valorLitro = 5
    let km = (abastecimento/valorLitro)*carro
    res = document.querySelector('p#resposta')
    res.innerHTML= `Seu carro vai andar ${km}km`
    




}