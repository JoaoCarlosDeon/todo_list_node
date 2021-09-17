require('dotenv').config()
const express = require('express')
const CheckList = require('./routes/CheckList')
const server = express()


server.use(CheckList)


//Page STATUS ERROR 404
server.use((req, res)=> {
    res.status(404).send('Página não encontrada! ERRO: 404')
})

port = process.env.PORT
server.listen(port, ()=> {
    console.log("Server running on port: " + port);
})

module.exports = server