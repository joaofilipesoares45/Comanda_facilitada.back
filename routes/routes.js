const express = require('express');
const router = express.Router();

router.use('/login', require('./login.js'))

router.use('/comandas', require('./comandas.js'))

router.use('/produtos', require('./produtos.js'))

module.exports = router