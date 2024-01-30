require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000

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

app.get('/q', (req, res) => {
    res.send('<h1>i lovu</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})