
const express = require('express');
const router = express.Router();
const diretorasControllers = require('../controllers/diretorasControllers');

router.get('/diretoras-influentes', diretorasControllers.getDiretorasInfluentes);

module.exports = router;
