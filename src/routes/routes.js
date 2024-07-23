const express = require('express');
const router = express.Router();
const admins = require('../controllers/admin');
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
 * '/api/admins':
 *  get:
 *     tags:
 *     - Admins
 *     summary: Retorna el listado de admins
 *     responses:
 *      201:
 *        description: Created
 *        string: JWT
 *      404:
 *        description: Usuarios no encontrados
 *      500:
 *        description: Server Error
 */

router.get('/admins', [verifyToken], admins.getAdmins);

// Rutas compartidas para eliminar empleados

/**
 * @openapi
 * '/api/admins_delete/:user_id':
 *  delete:
 *     tags:
 *     - Admins
 *     summary: Elimina un admin segun su id
 *     responses:
 *      201:
 *        description: Updated
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Server Error
 */

router.delete('/admins/:user_id', [verifyToken], admins.deleteAdmin);

/**
 * @openapi
 * '/api/admins/:id':
 *  get:
 *     tags:
 *     - Admins
 *     summary: Retorna un admin por id
 *     responses:
 *      200:
 *        description: OK
 *      204:
 *        description: No hay admin
 *      500:
 *        description: Server Error
 */
router.get('/admins/:user_id', [verifyToken], admins.getAdminsById);

// Rutas compatidas para crear admin
/**
 * @openapi
 * '/api/admins':
 *  get:
 *     tags:
 *     - Admins
 *     summary: Crea un admin
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *              - email
 *            properties:
 *              username:
 *                type: string
 *                default: trendding admin
 *              password:
 *                type: string
 *                default: 123456
 *              email:
 *                type: string
 *                default: admin@gmail.com
 *     responses:
 *      201:
 *        description: Created
 *        string: JWT
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Server Error
 */
router.post('/admins', [verifyToken], admins.postAdmins);

/**
 * @openapi
 * '/api/admins/:user_id':
 *  put:
 *     tags:
 *     - Admins
 *     summary: Actualiza el admin segun id
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *              - email
 *            properties:
 *              password:
 *                type: string
 *                default: 123456
 *              username:
 *                type: string
 *                default: trendding
 *              email:
 *                type: string
 *                default: Solo@gmail.com
 *     responses:
 *      201:
 *        description: Updated
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Server Error
 */
// Rutas compatidas para actualizar usuarios
router.put('/admins/:user_id', [verifyToken], admins.updateAdmin);


module.exports = router;