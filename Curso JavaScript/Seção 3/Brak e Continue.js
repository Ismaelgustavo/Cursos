const numeros = [1,2,3,4,5,6,7,8,9]

for (numero of numeros){

    if (numero === 2){
        continue //essa condiçao nao exibe o numero 2
    }

    if(numero === 7){
        break //interrompe o laço nessa condição
    }

    console.log(numero)
}
