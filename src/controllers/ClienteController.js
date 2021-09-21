const Cliente = require('../models/Cliente')

module.exports = {

    //LISTANDO TODOS OS CLIENTES

    async get (req, res){
        const clientes = await Cliente.findAll()

        return res.json(clientes)
    },

    //INSERINDO UM CLIENTE

    async post (req, res){
        const { nome, email } = req.body

        let cliente = await Cliente.create({ nome, email })

        return res.json(cliente)
    },

    //DELETANDO UM CLIENTE

    async delete (req, res){
        await Cliente.destroy({
            where: { id: req.params.id }
        })

        return res.json({ message: 'Deletado com sucesso'})
    },

    //ATUALIZANDO NOME E EMAIL DO CLIENTE
    
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