const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/product.list', function (req, res) {
    const product = [{ name: 'test name' }]
    res.send(JSON.stringify(product))
})

app.listen(3000)