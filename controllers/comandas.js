const functions = require('../utils/Data_functions')

module.exports = {
    async index(req, res) {
        res.send(functions.read('comandas'))
    },
    async store(req, res) {
        const body = req.body
        res.send(functions.write('comandas', body))
    },
    async update(req, res) {
        const body = req.body
        res.send(functions.update('comandas', body))
    },
    async delete(req, res) {
        const body = req.body
        res.send(functions.delete('comandas', body))
    }
}