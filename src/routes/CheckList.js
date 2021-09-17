const express = require('express')

const routes = express.Router()

routes.get('/', (req, res)=> {
    res.send(`<h1>Minha Lista de Tarefas</h1>`)
})

routes.get('/json', (req, res)=> {
    res.json({ title: 'Tarefa X', done: true })
})


module.exports = routes