const { Router} = require('express')
const express = require('express')

const {resolve} = require('path')

const routes = Router()

routes.post("/contato")

routes.use(express.static('public'))

routes.get("/home", async (req, res) => {
    res.sendFile(resolve(__dirname, '../views/index.html'))
})

module.exports = routes