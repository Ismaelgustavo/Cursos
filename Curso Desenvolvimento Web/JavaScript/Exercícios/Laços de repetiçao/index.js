/*
         var frutas = Array()

         frutas[0] = 'Banana'
         frutas[1] =  'Uva'  
         frutas[2] = 'Mamão'
         frutas[3] = 'Morango'
         frutas[4] = 'Laranja'

        for(let x = 0; x < frutas.length ; x++){
            console.log(frutas[x] + '<br />')
        }
*/

let x = 1
let y = 1

while (x <= 10) {
    y = 1
    while (y <= 10) {
        let result = x * y
        console.log(x +'x' + y + '=' + result)
        y++
    }
 x++
 console.log('/n')
}

