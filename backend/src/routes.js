const express = require('express');

const routes = express.Router();

routes.post('/user', (request, response) => {
  const body = request.body
  console.log(body);

  return response.json({
    evento: 'semana crazy',
    aluno: 'Ronaldo'
  })
})

module.exports = routes;