const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/todo-list', { 
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Conexão com o MongoDB realizada com sucesso!'))
.catch((err)=> console.log('Erro na conexão com o MongoDB realizada com sucesso!', err))


