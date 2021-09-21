const { Model, DataTypes } = require('sequelize')

class Assinatura extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Cliente, { foreignKey: 'assinaturas_id', through: 
        'assinaturas_clientes', as: 'clientes' })
    }
}

module.exports = Assinatura