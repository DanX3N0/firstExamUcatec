const express = require('express')
const path = require('path')

const app = express()

const routeProducts = require('./routes/products')
const routeCart = require('./routes/cart')
const routeUsers = require('./routes/users')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use('/products', routeProducts)
app.use('/cart', routeCart)
app.use('/users', routeUsers)

const PORT = 3000
const HOST = 'localhost'

app.listen(PORT, HOST, () => {
  console.log(`Server run on http://${HOST}:${PORT}`)
})
