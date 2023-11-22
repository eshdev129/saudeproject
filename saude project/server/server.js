const express = require('express')
const cors = require('cors')
 
const {Contato} = require('./src/models/Contato')
 
require('dotenv/config')
require('./src/database')
 
const PORT = process.env.SERVER_PORT || 3333
 
const app = express()
 
app.use(cors())
 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
 
app.post("/api/contatos", async (req, res) => {
    try {
        const novoContato = await Contato.create(req.body)
        res.status(201).json(novoContato)
    } catch (error) {
        console.error('Erro ao criar contato: ', error)
        res.status(500).json({error: 'Erro interno do servidor'})
    }
})
 
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Algo deu errado')
})
 
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})