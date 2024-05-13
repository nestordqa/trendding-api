const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee');
const common = require('../controllers/common');
const verifyToken = require('../middlewares/auth');

// Rutas compartidas para ambos tipos de usuarios
/**
 * @openapi
 * '/api/login':
 *  get:
 *     tags:
 *     - Login
 *     summary: Crea un empleado
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - ema_usu
 *              - pass_usu
 *            properties:
 *              ema_usu:
 *                type: string
 *                default: hansolo@human.com
 *              pass_usu:
 *                type: string
 *                default: hanAlone
 *     responses:
 *      201:
 *        description: Created
 *        string: JWT
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Server Error
 */
router.get('/login', common.login);

// Rutas compartidas para obtener usuarios

/**
 * @openapi
 * '/api/employees':
 *  get:
 *     tags:
 *     - Employees
 *     summary: Retorna el listado de empleados
 *     responses:
 *      201:
 *        description: Created
 *        string: JWT
 *      404:
 *        description: Usuarios no encontrados
 *      500:
 *        description: Server Error
 */

router.get('/employees', [verifyToken], employee.getEmployees);

/**
 * @openapi
 * '/api/employees/:ced_usu':
 *  get:
 *     tags:
 *     - Employee by cedula
 *     summary: Retorna un empleado por nro de cedula
 *     responses:
 *      200:
 *        description: OK
 *      204:
 *        description: No hay empleado
 *      500:
 *        description: Server Error
 */
router.get('/employees/:ced_usu', [verifyToken], employee.getEmployeesByCedula);

// Rutas compatidas para crear usuarios
/**
 * @openapi
 * '/api/employees':
 *  get:
 *     tags:
 *     - Employees
 *     summary: Crea un empleado
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - ema_usu
 *              - nom_usu
 *              - ape_usu
 *              - ced_usu
 *            properties:
 *              ema_usu:
 *                type: string
 *                default: hansolo@human.com
 *              nom_usu:
 *                type: string
 *                default: Han
 *              ape_usu:
 *                type: string
 *                default: Solo
 *              ced_usu:
 *                type: number
 *     responses:
 *      201:
 *        description: Created
 *        string: JWT
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Server Error
 */
router.post('/employees', [verifyToken], employee.postEmployees);

/**
 * @openapi
 * '/api/employees/:ced_usu':
 *  put:
 *     tags:
 *     - Employees
 *     summary: Actualiza empleado segun su nro de cedula
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - ema_usu
 *              - nom_usu
 *              - ape_usu
 *              - ced_usu
 *              - pass_usu
 *              - add_usu
 *              - pho_usu
 *            properties:
 *              ema_usu:
 *                type: string
 *                default: hansolo@human.com
 *              nom_usu:
 *                type: string
 *                default: Han
 *              ape_usu:
 *                type: string
 *                default: Solo
 *              ced_usu:
 *                type: number
 *     responses:
 *      201:
 *        description: Updated
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Server Error
 */
// Rutas compatidas para actualizar usuarios
router.put('/employees/:ced_usu', [verifyToken], employee.updateEmployee);

/**
 * @openapi
 * '/api/employee_vacuna/:ced_usu':
 *  put:
 *     tags:
 *     - Employees
 *     summary: Actualiza estado de vacunacion del empleado segun su nro de cedula
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - vac_usu
 *              - vac_tip_usu
 *              - fec_vac_usu
 *              - num_dos_vac_usu
 *            properties:
 *              vac_usu:
 *                type: boolean
 *                default: false
 *              vac_tip_usu:
 *                type: string
 *                default: Sputnik, AstraZeneca, Pfizer y Jhonson&Jhonson
 *              fec_vac_usu:
 *                type: date
 *                default: null
 *              num_dos_vac_usu:
 *                type: SMALLINT
 *     responses:
 *      201:
 *        description: Updated
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Server Error
 */
router.put('/employee_vacuna/:ced_usu', [verifyToken], employee.updateEmployeeVacuna);

// Rutas compartidas para eliminar empleados

/**
 * @openapi
 * '/api/employee/:ced_usu':
 *  get:
 *     tags:
 *     - Employees
 *     summary: Elimina empleado segun su nro de cedula
 *     responses:
 *      201:
 *        description: Updated
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Server Error
 */
router.delete('/employee/:ced_usu', [verifyToken], employee.deleteEmployee);


module.exports = router;