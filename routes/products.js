const express = require('express')
const router = express.Router()

const products = [
  {
    id: 1,
    name: 'Cuaderno Deluxe',
    price: 150,
    description: 'Low Cost Product & Deluxe Edition',
  },
  {
    id: 2,
    name: 'Mochila',
    price: 100,
    description: 'Mochila de 3 piezas mas sticker de regalo',
  },
  {
    id: 3,
    name: 'Pack de Hojas',
    price: 250,
    description: 'Pack de Hojas recicladas',
  },
  {
    id: 4,
    name: 'Caja de Lapiceros',
    price: 450,
    description: 'Lapiceros SABONIS',
  },
  {
    id: 5,
    name: 'Impresora Portatil',
    price: 550,
    description: 'Impresora para llevar a todas partes',
  },
]

//products route
router.get('/', (req, res) => {
  let html =
    '<h1 style="display: flex; flex-direction: column; justify-content: center; align-items: center;">Productos Disponibles</h1>'
  products.forEach((product) => {
    html += `
      <div style="margin-left: auto;margin-right: auto; display: flex; flex-direction: column; align-items: center; border: 1px solid black; width: 500px; height: auto">
        <h2>${product.name}</h2>
        <h3>Precio: Bs ${product.price}</h3>
        <h4>${product.description}</h4>
        <form action="/cart/add" method="post">
          <input type="hidden" name="name" value="${product.name}">
          <input type="hidden" name="price" value="${product.price}">
          <input type="hidden" name="description" value="${product.description}">
          <input type="number" name="quantity" value="1" min="1">
          <button type="submit">Agregar al carrito</button>  
        </form>
      </div>
      `
  })
  res.send(html)
})

router.get('/id', (req, res) => {
  const productId = req.params.id
  const product = products.find((p) => p.id == parseInt(productId))
  if (product) {
    res.send(`Detalle de ${product.name} - Precio: Bs ${product.price}`)
  } else {
    res.status(404).send('Producto no disponible')
  }
})

module.exports = router
