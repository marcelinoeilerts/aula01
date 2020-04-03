const express = require('express');

const server = express()

server.get('/teste', (req, res) => {
  const nome = req.query.nome

  
  return res.json({ hello: `Olá ${nome} ` })
})

server.listen(3000);