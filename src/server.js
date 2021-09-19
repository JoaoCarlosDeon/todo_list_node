require('dotenv').config()
const express = require('express')
const path = require('path')
const checkListsRouter = require('./routes/checkLists')
const rootRouter = require('./routes/index')
const methodOverride = require('method-override')
const dataBase = require('../config/database')

const server = express()


server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(methodOverride('_method'))
server.use(express.static('public'))

server.set('views', path.join('./src/views'))
server.set('view engine', 'ejs' )


server.use('/', rootRouter)
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