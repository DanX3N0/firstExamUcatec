const express = require('express')
const router = express.Router()

let cart = []

router.get('/', (req, res) => {
  let html =
    '<h1 style="display: flex; flex-direction: column; justify-content: center; align-items: center;">Carrito de Compras</h1>'
  if (cart.length === 0) {
    html +=
      '<p style="display: flex; flex-direction: column; justify-content: center; align-items: center;">Carrito Vacio</p>'
  } else {
    cart.forEach((item) => {
      html += `
          <div style="margin-left: auto;margin-right: auto; display: flex; flex-direction: column; align-items: center; border: 1px solid black; width: 500px; height: auto">
            <p>${item.name} x ${item.quantity} - Total: Bs ${item.total}</p>        
          </div>
        `
    })
  }
  res.send(html)
})

router.post('/add', (req, res) => {
  const { name, price, quantity } = req.body
  const total = parseFloat(price) * parseInt(quantity)
  cart.push({ name, quantity, total })
  res.send(`Agregado ${quantity} unidad(es) de ${name} correctamente`)
})

module.exports = router
