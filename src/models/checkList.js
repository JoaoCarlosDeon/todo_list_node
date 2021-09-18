const mongoose = require('mongoose')

const checklistSchema = mongoose.Schema({
    name: { type: String, required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectID,
    ref: 'Task'
    }]//multiplas tasks
})


module.exports = mongoose.model('Checklist', checklistSchema)