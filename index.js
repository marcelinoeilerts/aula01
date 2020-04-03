const express = require('express');

const server = express()

server.get('/teste', (req, res) => {
  return res.json({ hello: 'world2' })
})

server.listen(3000);