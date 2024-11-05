const functions = require('../utils/Data_functions')

module.exports = {
    async index(req, res) {
        res.send(functions.read('produtos'))
    },
    async store(req, res) {
        const body = req.body
        res.send(functions.write('produtos', body))
    },
    async update(req, res) {
        const body = req.body
        res.send(functions.update('produtos', body))
    },
    async delete(req, res) {
        const body = req.body
        res.send(functions.delete('produtos', body))
    }
}