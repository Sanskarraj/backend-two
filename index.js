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

app.get('/s', (req, res) => {
    res.send('Hello s!')
})

app.get('/xxx', (req, res) => {
    res.send('Hello xxx!')
})

app.get('/q', (req, res) => {
    res.send('<h1>i lovu</h1>')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'this is joke 1',
            content: 'kuch bhi daal this is one pehle daal'
        },
        {
            id: 2,
            title: 'this is joke 2',
            content: 'kuch bhi daal this is two pehle daal'
        },
        {
            id: 3,
            title: 'this is joke 3',
            content: 'kuch bhi daal this is three pehle daal'
        },
        {
            id: 4,
            title: 'this is joke 4',
            content: 'kuch bhi daal this is four pehle daal'
        },
        {
            id: 5,
            title: 'this is joke 5',
            content: 'kuch bhi daal this is five pehle daal'
        },

    ];
    res.send(jokes);
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})