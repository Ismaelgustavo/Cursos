const express = require('express')
const app = express()

app.get('/',(req,res) =>{
    res.send(`
    <form action ="/" method="POST">
    Nome:<input type="text" name="nome">
    <button>Enviar</button>
    </form>   
    `)
})

app.get('/contato',(req,res)=>{
    res.send('obrigado por entrar em contato')
})

app.listen(3000 ,()=>{
    console.log('Acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
})
    
