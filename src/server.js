require('dotenv').config()
const express = require('express')
const checkListsRouter = require('./routes/checkLists')
const dataBase = require('../config/database')
const server = express()


server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/checklists', checkListsRouter)

//Page STATUS ERROR 404
server.use((req, res)=> {
    res.status(404).send('Página não encontrada! ERRO: 404')
})

port = process.env.PORT || 8080
server.listen(port, ()=> {
    console.log("Server running on port: " + port);
})

module.exports = server