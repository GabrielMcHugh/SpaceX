
const express = require('express')
const path = require('path')
const morgan = require('morgan')

const launchpadsRouter = require('./routes/launchpads/launchpads.router')

const app = express()

app.use(morgan('short'))

app.use(express.json())

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use('/site', express.static(path.join(__dirname, 'public')))

app.use('/launchpads', launchpadsRouter)

app.get('/*', (req, res) => {
    res.render('index', {
        title: 'Launchpads',
    })
})

module.exports = app