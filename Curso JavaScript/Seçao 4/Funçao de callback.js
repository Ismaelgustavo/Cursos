function rand(min = 1000 ,max =3000){
    const num = Math.random() * (max-min)
    return Math.floor(num)
}


function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if (callback) callback()
    },rand())
}
function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if (callback) callback()
    },rand())
}


f1(function(){
    f2(function(){
        console.log('Olá mundo') 
    })
})
