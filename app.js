// Carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const app = express()
const admin = require('./routes/admin')


// Configurações
    // Body-Parser
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }))

    // Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')    

    // Mongoose


// Rotas
// localhost:8081/admin/posts
app.use('/admin', admin)

// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando na porta http://localhost:8081")
})