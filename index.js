const express = require('express');

const server = express()

//Query params => http://localhost:3000/teste?Marcelino

server.get('/teste', (req, res) => {
  const nome = req.query.nome
  return res.json({ hello: `Olá ${nome} ` })
})

//Route params => http://localhost:3000/1
server.get('/users/:id', (req,res) => {
  
  //desconstrucao const id = req.params.id
  const { id } = req.params
  return res.json({ hello: `Buscando o usuario ${id} ` })
})

//Request body
const users = [ 'Marcelino', 'Carlos', 'Camila' ]
server.get('/user/:index', (req, res) => {
  const { index } = req.params

  return res.json(users[index])
})

server.listen(3000);