const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name: { type: String, required: true },
    done: { type: Boolean, default: false },
    done: { type: Boolean, default: false },
    //relação por referencia
    checklist: { 
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Checklist',
        required: true
        //ligado a um objeto de um checklist
        //só vai existir uma task se existir um chacklist
    }
})

module.exports = mongoose.model('Task', taskSchema)