exports.paginaInicial = (req,res) =>{
    res.send(`
    <form action ="/" method="POST">
    Nome:<input type="text" name="nome">
    <button>enviar</button>
    </form>   
    `)
}

exports.trataPost = (req,res) =>{
    res.send('ei,sua nova rota')
}

