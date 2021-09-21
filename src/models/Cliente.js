const { Model, DataTypes} = require('sequelize')

class Cliente extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Assinatura, { foreignKey: 'clientes_id', 
        through: 'assinaturas_clientes', as: 'assinaturas' })
    }
}

module.exports = Cliente