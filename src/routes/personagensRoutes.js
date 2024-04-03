
const express = require('express');
const router = express.Router();
const personagensControllers = require('../controllers/personagensControllers');

router.get('/personagens-femininas-iconicas', personagensControllers.getPersonagensIconicas);

module.exports = router;
