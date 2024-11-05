const functions = require('../utils/Data_functions')

module.exports = {
    async index(req, res) {
        res.send(functions.read('usuarios'))
    },
    async store(req, res) {
        const body = req.body
        const usuario = functions.read('usuarios').filter(({username}) => username === body.username)[0]
        if (usuario) {
            res.send(usuario)
        }else {
            res.send({"msg": [2, 'Erro', 'Usuário não existe!']})
        }
    },
    async update() {},
    async delete() {}
}