// recuperar a biblioteca do express
const express = require('express')

//adicionar os recusos do express ao nosso app
const app = express()

// definir o motor de views como sendo o EJS
app.set('view engine', 'ejs')

// setar o diretorio de views do EJS
app.set('views', './app/views')

// caminho dos arquivos estáticos
app.use(express.static('./app/public'))


module.exports = app