const express = require('express')
const router = express.Router()
const Checklist = require('../models/checkList')

router.get('/', async (req, res)=> {
    try {
        const checklists = await Checklist.find()       
        res.status(200).render('pages/checklists/index', {
            checklists: checklists
        })
    }
    catch (error) {
        // res.status(500).json(error)
        res.status(404).render('pages/error', {error: "Erros ao exibir as listas de tarefas"})
    }
}) 

router.get('/new', async (req,res)=> {

    try{
        const checklist = new Checklist() //recebe um objeto vazio
        res.status(200).render('pages/checklists/new', {
            checklist: checklist
        })
    }
    catch(error) {
        res.status(404).render('pages/error', {error: "Erro ao carregar o formulário"})
    }
})

router.get('/:id/edit', async (req, res)=> {
    const { id } = req.params
    try {
        const checklist = await Checklist.findById(id)
        res.status(200).render('pages/checklists/edit', {
            checklist: checklist
        })
    }catch(err) {
        res.status(404).render('pages/error', {error: "Erro ao exibir a edição de lista de tarefas"})
    }
})

router.post('/', async (req, res)=> {
    const { name } = req.body.checklist //recurso que estamos atualizando
    const checklist = new Checklist({name})
    
    //SE DER ERRO VER // Enviando dados de um formulário com POST (Parte 1)
    try {
        await checklist.save()
        // const checklist = await Checklist.create({ name })
        res.redirect('/checklists')
    }       
    catch(error) {
        res.status(422).render('pages/checklists/new', { checklist: {...checklist, error} })
    }
})

router.get('/:id', async (req, res)=> {
    const { id } = req.params
    try {
        const checklist = await Checklist.findById(id)
        res.status(200).render('pages/checklists/show', {
            checklist: checklist
        })
    }
    catch (error) {
        // res.status(422).json(error)
        res.status(500).render('pages/error', {error: "Erros ao exibir as listas de tarefas"})
    }
}) 

router.put('/:id', async (req, res)=> {
    const { id } = req.params
    const { name } = req.body.checklist
    const checklist = await Checklist.findById(id)


    try {
        await checklist.updateOne({ name })//esse {name} é o parametro pra ser atualizado
        //no Update sempre usar o {new: true} // é pra atualizar no banco de dados 
        res.redirect('/checklists')
    }catch(error) {
        let errors = error.errors
        res.status(422).render('pages/checklist/edit', {
            checklist: {...checklist, errors }
        })
    }
})

router.delete('/:id', async (req, res)=> {

    const { id } = req.params
    try {
        const checklist = await Checklist.findByIdAndRemove(id)//esse {name} é o parametro pra ser atualizado
        res.status(200).json({
            error: false,
            message: "Tasks successfully deleted!"
        })
    }catch(error) {
        res.status(422).json({
            error: true,
            message: "Error deleting task"
        })
    }
})




module.exports = router