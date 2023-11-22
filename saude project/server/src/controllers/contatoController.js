const Contato = require('./models/Contato')

class ContatoController {
    async newContact(req, res) {
        const {nome, email, mensagem} = req.body

        const contact = await Contato.create({
            nome, email, mensagem
        })
        return res.status(201).json([contact])
    }
}
module.exports = ContatoController
