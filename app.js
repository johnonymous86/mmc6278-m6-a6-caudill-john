const express = require('express')
const path = require('path') 
const apiRoutes = require('./routes/api-routes')
const htmlRoutes = require('./routes/html-routes')
const app = express()
const exphbs = require('express-handlebars')

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const hbs = exphbs.create({
    
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/layouts'),
    
    partialsDir: path.join(__dirname, 'views/partials')
});

app.engine('handlebars', hbs.engine) 
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

module.exports = app