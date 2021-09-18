const express = require('express')
const router = express.Router()
const Checklist = require('../models/checkList')

router.get('/', async (req, res)=> {
    try {
        const checklists = await Checklist.find()
        res.status(200).json({
            error: false,
            message: "Tasks listed successfully!",
            checklists
        })
    }
    catch (err) {
        res.status(500).json(error)
    }
}) 

router.get('/:id', async (req, res)=> {
    const { id } = req.params
    try {
        const checklist = await Checklist.findById(id)
        res.status(200).json({
            error: false,
            message: "Task listed successfully!",
            checklist
        })
            console.log(id)
    }
    catch (err) {
        res.status(422).json(error)
    }
}) 

router.post('/', async (req, res)=> {
    const { name } = req.body
    // console.log(name)
    
    try {
        const checklist = await Checklist.create({ name })

        res.status(200).json({
            error: false,
            message: "Tasks created successfully!",
            name
        })
         console.log(name)
    }
       
    catch(error) {
        res.status(422).json(error)
    }
})

router.put('/:id', async (req, res)=> {
    const { id } = req.params
    const { name } = req.body

    try {
        const checklist = await Checklist.findByIdAndUpdate(id, { name }, {new: true})//esse {name} é o parametro pra ser atualizado
        //no Update sempre usar o {new: true} // é pra atualizar no banco de dados 

        res.status(200).json({
            error: false,
            message: "Tasks updated successfully!",
            name
        })
    }catch(error) {
        res.status(422).json(error)
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