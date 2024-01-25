const express = require('express')
const router = express.Router()

// Definindo rotas
router.get('/', (req, res) => {
    res.send("Página Principal do painel adm")
})

router.get('/posts', (req, res) => {
    res.send("Página de posts")
})

router.get('/categorias', (req, res) => {
    res.send("Página de Categorias")
})

module.exports = router