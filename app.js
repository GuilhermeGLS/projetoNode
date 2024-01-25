// Carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parse')
// const mongoose = require('mongoose')
const app = express()


// Configurações
    // Body-Parser
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    // Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))

    // Mongoose

    
// Rotas


// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando")
})