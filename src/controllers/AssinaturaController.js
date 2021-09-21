const Cliente = require('../models/Cliente')
const Assinatura = require('../models/Assinatura')

module.exports = {

    async get (req, res){
        const assinaturas = await Assinatura.findAll()

        return res.json(assinaturas)
    },

    //ADICIONANDO ASSINATURAS AO CLIENTE

    async post (req, res){
        const { cliente_id } = req.params
        const { nome } = req.body

        const cliente = await Cliente.findByPk(cliente_id)

        if (!cliente) {
            return res.status(400).json({ error: 'Cliente não encontrado' })
        }

        const [ assinatura ] = await Assinatura.findOrCreate({
            where: { nome }
        })

        await cliente.addAssinatura(assinatura)

        return res.json(assinatura)
    },

    //DELETANDO ASSINATURA DO USUÁRIO

    async delete (req, res){
        const { cliente_id } = req.params
        const { nome } = req.body

        const cliente = await Cliente.findByPk(cliente_id)

        if (!cliente) {
            return res.status(400).json({ error: 'Cliente não encontrado' })
        }

        const assinatura = await Assinatura.findOne({
            where: { nome }
        })

        await cliente.removeAssinatura(assinatura)

        return res.json()
    }
}