const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) =>{
    res.send(`
    <form action ="/" method="POST">
    Nome:<input type="text" name="nome">
    <button>ola</button>
    </form>   
    `)
})

app.get('/testes/:idUsuarios?',(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send(req.params.idUsuarios)
})
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('O que vc me enviou foi:' + req.body.nome)
})


app.listen(3000 ,()=>{
    console.log('Acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
})
    
