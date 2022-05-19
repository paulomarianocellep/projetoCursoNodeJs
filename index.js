// npm init
// git init
// Dedendencias do projeto
// npm install express
// npm install ejs

// recusos do desenvolvimento
// npm install -g nodemon

// recuperando o modulo de configuração do servidor
const app = require('./config/server')

// rota home
app.get('/', function(req, res){
    res.render('home/index')
})

// rota noticias
app.get('/noticias', function(req, res){
    res.render('news/noticias')
})

app.listen(3000, () => {
    console.log('Servidor rodando com express')
})