function rand(min,max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random()* (max-min)+min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string') {
            reject(false)
            return
        }

        setTimeout(() => {
            resolve(msg)
        },tempo)
    })
}

const promises = [ 
    //'Primeiro Valor',
    esperaAi('Promise 1',3000),
    esperaAi('Promise 2',500),
    esperaAi('Promise 3',1000),
    //'outro valor'
 ]

 //métodos -> .all - .race - .resolve - .reject

 Promise.race(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })

    function baixarPagina(){
        const emCache = true

        if(emCache){
            return Promise.resolve('Página em cage')
        } else {
            return esperaAi('Baixei a página',3000)
        }
    }
    