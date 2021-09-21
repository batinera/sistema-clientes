const express = require('express')
const ClienteController = require('./controllers/ClienteController')
const AssinaturaController = require('./controllers/AssinaturaController')

const routes = express.Router()

//ROTAS CLIENTES

routes.get('/clientes', ClienteController.get)
routes.post('/clientes', ClienteController.post)
routes.delete('/clientes/:id', ClienteController.delete)
routes.put('/clientes/:id', ClienteController.put)

//ROTAS ASSINATURAS

routes.get('/assinaturas', AssinaturaController.get)
routes.post('/clientes/:cliente_id/assinaturas', AssinaturaController.post)
routes.delete('/clientes/:cliente_id/assinaturas', AssinaturaController.delete)


module.exports = routes