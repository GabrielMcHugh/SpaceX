const express = require('express')
const app = express()

const starlinkRouter = require('./routes/starlink.router')


const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/starlink', starlinkRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})