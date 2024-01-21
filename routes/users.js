const express = require('express')
const router = express.Router()

let users = []

router.get('/', (req, res) => {
  let html =
    '<h1 style="display: flex; flex-direction: column; justify-content: center; align-items: center;">Agregar Usuario</h1>'
  html += `
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <form style="display: flex; flex-direction: column; justify-content: center; align-items: center; border: 1px solid black; padding: 30px; border-radius: 15px" action="/users/add" method="post">
      <label for="name">Nombre:</label>
      <input style="margin: 10px" type="text" name="name" value="">
      <label for="email">Email:</label>
      <input style="margin: 10px" type="text" name="email" value="">
      <button style="margin: 10px" type="submit">Agregar Usuario</button>  
    </form>
    <a href="/users/usersList">Ver lista de usuarios</a>
    </div>
  `
  res.send(html)
})

router.post('/add', (req, res) => {
  const { name, email } = req.body
  users.push({ name, email })
  res.send(
    `Usuario de Nombre: ${name} y Email: ${email} agregado correctamente`
  )
})

router.get('/usersList', (req, res) => {
  let html =
    '<h2 style="display: flex; flex-direction: column; justify-content: center; align-items: center;">LISTA DE USUARIOS</h2><hr>'
  if (users.length === 0) {
    html +=
      '<p style="display: flex; flex-direction: column; justify-content: center; align-items: center;">No existen Usuarios</p>'
  } else {
    users.forEach((user, index) => {
      html += `
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <p>Usuario: ${index + 1}</p>
            <p>Nombre: ${user.name}</p>
            <p>Email: ${user.email}</p>
            </div>
          <hr>
        `
    })
  }
  res.send(html)
})

module.exports = router
