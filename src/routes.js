const express = require('express')
const ClienteController = require('./controllers/ClienteController')

const routes = express.Router()

routes.get('/clientes', ClienteController.get)
routes.post('/clientes', ClienteController.post)
routes.delete('/clientes/:id', ClienteController.delete)
routes.put('/clientes/:id', ClienteController.put)

module.exports = routes