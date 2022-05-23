// npm init
// git init
// Dedendencias do projeto
// npm install express
// npm install ejs

// recursos do desenvolvimento
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

//rota admin
app.get('/admin', function(req, res){
    res.render('admin/form_add_noticia')
})

app.listen(3000, () => {
    console.log('Servidor rodando com express')
})