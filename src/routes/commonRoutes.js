const express = require('express');
const router = express.Router();
const common = require('../controllers/common');

// Rutas compartidas para ambos tipos de usuarios
router.get('/login', common.login);

module.exports = router;