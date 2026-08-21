const express = require('express')
const app = express()

const produtos = [
    {id: 1, descricao: "Banana Prata", preco: 8.99},
    {id: 2, descricao: "Leite integral 1L", preco: 2.99},
    {id: 3, descricao: "Paçoca", preco: 1.99}
    
]

app.get (`/produtos`, (req, res) => {
    res.json (produtos)
})

app.delete ('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log (`excluir ${id}`)

    const index = produtos.findIndex (produto => produto.id === id)
    if (index != -1) {
        produtos.splice (index, 1)
        res.status = 204
        res.json (produtos)    
    } else {
        res.status = 404
        res.send ("Esse id de produto não existe")
        //console.error("Erro 404");
        console.log ("Esse id de produto não existe")        
    }

})



const port=3000
app.listen (3000, (e) => {
    console.log (`Servidor ouvindo em http://localhost:${port}`)
})