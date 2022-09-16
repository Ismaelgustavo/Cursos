//const data = new Date(2022,0) //janeiro = 0 (ano,m,d,h,minu,s,mileSegun)
//console.log(data.toString())

const data = new Date('2022-01-01 20:21:22.100') //aqui janeiro = 1
console.log(data.toString())
console.log('Dia',data.getDate())
console.log('Mês',data.getMonth()+1) //começa do 0
console.log('Ano',data.getFullYear())
console.log('Hora',data.getHours())
console.log('Min',data.getMinutes())
console.log('Sec',data.getSeconds())
console.log('ms',data.getMilliseconds())
console.log('Dia da semana',data.getDay()) // domingo -> 0 , sabado -> 6
console.log(Date.now())