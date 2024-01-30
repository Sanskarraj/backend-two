const express = require('express')
require(dotenv).config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/qwert', (req, res) => {
    res.send('Hello qwwrt!')
})

app.get('/sex', (req, res) => {
    res.send('Hello sex!')
})

app.get('/xxx', (req, res) => {
    res.send('Hello xxx!')
})

app.get('/', (req, res) => {
    res.send('<h1>i lovu</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})