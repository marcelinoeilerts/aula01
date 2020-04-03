const express = require('express');

const server = express()

//Query params

server.get('/teste', (req, res) => {
  const nome = req.query.nome
  return res.json({ hello: `Olá ${nome} ` })
})

//Route params 
server.get('/users/:id', (req,res) => {
  const id = req.params.id
  return res.json({ hello: `Buscando o usuario ${id} ` })
})

server.listen(3000);