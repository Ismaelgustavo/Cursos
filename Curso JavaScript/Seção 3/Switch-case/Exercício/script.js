const res = document.querySelector('h1#hora')

const dayName = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
const monthName = ["Janeiro","Fevereiro","Abril","maio","Junho","julho","Agosto","Setembro","Outubro","Novembro","Dezembro",]
const now = new Date()
let h = now.getHours()
let m = now.getUTCMinutes()


res.innerHTML = `${dayName[now.getDay()]}, ${now.getDate()} de ${monthName[now.getMonth()]} de ${now.getUTCFullYear()}<br>
${h}:${m}`