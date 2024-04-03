
const express = require('express');
const router = express.Router();
const apoioControllers = require('../controllers/apoioControllers');

router.get('/organizacoes-empoderamento-feminino', apoioControllers.getApoioEmpoderamento);

module.exports = router;
