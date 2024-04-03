
const express = require('express');
const router = express.Router();
const filmesControllers = require('../controllers/filmesControllers');

router.get('/filmes-empoderamento-feminino', filmesControllers.getFilmesEmpoderamento);

module.exports = router;
