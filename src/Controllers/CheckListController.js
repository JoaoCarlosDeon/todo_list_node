const express = require('express')


const CheckListController = async (req, res)=> {
    console.log('Olá')
    res.send("Teste")
}

const ListController = async (req, res) => {
    console.log(req.body)
    res.status(200).send(req.boy)
}

module.exports = [CheckListController, ListController]