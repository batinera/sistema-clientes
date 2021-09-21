const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Cliente = require('../models/Cliente')
const Assinatura = require('../models/Assinatura')

const connection = new Sequelize(dbConfig)

Cliente.init(connection)
Assinatura.init(connection)

Cliente.associate(connection.models)
Assinatura.associate(connection.models)

module.exports = connection