const Cliente = require('../models/Cliente')

module.exports = {
    async index (req, res){
        const clientes = await Cliente.findAll()

        return res.json(clientes)
    },

    async store(req, res){
        const { nome, email } = req.body

        const cliente = await Cliente.create({ nome, email })

        return res.json(cliente)
    }
}