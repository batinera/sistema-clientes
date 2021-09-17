const express = require('express')
const ClienteController = require('./controllers/ClienteController')

const routes = express.Router()

routes.get('/clientes', ClienteController.index)
routes.post('/clientes', ClienteController.store)

module.exports = routes