const express = require('express');
const router = express.Router();

const controller = require('../controllers/comandas')
router.get('/', controller.index)
router.post('/', controller.store)
router.put('/', controller.update)
router.delete('/', controller.delete)

module.exports = router