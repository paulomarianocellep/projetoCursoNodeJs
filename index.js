// npm init
// git init
// Dedendencias do projeto
// npm install express
// npm install ejs

// recursos do desenvolvimento
// npm install -g nodemon

// recuperando o modulo de configuração do servidor
const app = require('./config/server')

// recuperar o modulo mockup
const noticias = require('./mockup')

// rota home
app.get('/', function(req, res){
    res.render('home/index', {noticias: noticias.slice(0, 3)})
})

// rota noticias
app.get('/noticias', function(req, res){
    // passamos todas as noticias do arquivo mockup atravez de um objeto javascript
    res.render('news/noticias', {noticias: noticias})
})

//rota noticia
app.get('/noticia', function(req, res){
    // recuperar id notícia por get
    const id = req.query.id
    res.render('news/noticia', { noticia : noticias[id] })
})

//rota admin
app.get('/admin', function(req, res){
    res.render('admin/form_add_noticia')
})

app.listen(3000, () => {
    console.log('Servidor rodando com express')
})