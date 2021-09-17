const Cliente = require('../models/Cliente')

module.exports = {
    //Listando todos os usuários
    async get (req, res){
        const clientes = await Cliente.findAll()

        return res.json(clientes)
    },

    //Inserindo um usuário
    async post (req, res){
        const { nome, email } = req.body

        let cliente = await Cliente.create({ nome, email })

        return res.json(cliente)
    },

    //Deletando um usuário
    async delete (req, res){
        await Cliente.destroy({
            where: { id: req.params.id }
        })

        return res.json({ message: 'Deletado com sucesso'})
    },

    //Atualizando nome e email do usuário
    async put (req, res){
        const { nome, email } = req.body

        await Cliente.update(
            { nome, email },
            {
                where: { id:req.params.id }
            })

        return res.json({ message: 'Atualizado com sucesso'})
    }
}