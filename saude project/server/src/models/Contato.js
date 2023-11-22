const {sequelize, Model} = require('sequelize')

class Contato extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING, 
                email: Sequelize.STRING,
                telefone: Sequelize.STRING,
                mensagem: Sequelize.TEXT
            },
            {
                sequelize
            },
        )
        return this
    }
}

module.exports = {Contato}