const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee');

// Rutas compartidas para obtener usuarios
router.get('/employees', employee.getEmployees);
router.get('/employees/:ced_usu', employee.getEmployeesByCedula);

// Rutas compatidas para crear usuarios
router.post('/post_employees', employee.postEmployees);

module.exports = router;