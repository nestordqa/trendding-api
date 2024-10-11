const express = require('express');
const router = express.Router();
const admins = require('../controllers/admin');
const lections = require('../controllers/lections');
const users = require('../controllers/users');
const categories = require('../controllers/categories');
const courses = require('../controllers/courses');
const teachers = require('../controllers/teachers');
const images = require('../controllers/images');
const videos = require('../controllers/videos');
const common = require('../controllers/common');
const run = require('../controllers/runDB');
const verifyToken = require('../middlewares/auth');
const verifyUsersToken = require('../middlewares/authUsers');

router.post('/rundb', run.runDb);
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
router.post('/login', common.login);

//RUTAS PARA ADMINS
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

//RUTAS PARA USERS
/**
 * @openapi
 * '/api/users':
 *  get:
 *     tags:
 *     - Users
 *     summary: Retorna el listado de USERS
 *     responses:
 *      201:
 *        description: Created
 *        string: JWT
 *      404:
 *        description: Usuarios no encontrados
 *      500:
 *        description: Server Error
 */

router.get('/users', [verifyUsersToken], users.getUsers);

// Rutas compartidas para eliminar users

/**
 * @openapi
 * '/api/users/:user_id':
 *  delete:
 *     tags:
 *     - Users
 *     summary: Elimina un user segun su id
 *     responses:
 *      201:
 *        description: Updated
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Server Error
 */

router.delete('/users/:user_id', [verifyUsersToken], users.deleteUser);

/**
 * @openapi
 * '/api/users/:id':
 *  get:
 *     tags:
 *     - Users
 *     summary: Retorna un user por id
 *     responses:
 *      200:
 *        description: OK
 *      204:
 *        description: No hay admin
 *      500:
 *        description: Server Error
 */
router.get('/users/:user_id', [verifyUsersToken], users.getUsersById);

// Rutas compatidas para crear user
/**
 * @openapi
 * '/api/users':
 *  get:
 *     tags:
 *     - Users
 *     summary: Crea un user
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
 *                default: trendding user
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
router.post('/users', users.postUser);

/**
 * @openapi
 * '/api/users/:user_id':
 *  put:
 *     tags:
 *     - Users
 *     summary: Actualiza el user segun id
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
router.put('/users/:user_id', [verifyUsersToken], users.updateUser);

//RUTAS PARA COURSES

/**
 * @openapi
 * '/api/courses':
 *  get:
 *     tags:
 *     - Courses
 *     summary: Retorna el listado de Courses
 *     responses:
 *      201:
 *        description: Created
 *        string: JWT
 *      404:
 *        description: course no encontrados
 *      500:
 *        description: Server Error
 */

router.get('/courses', [verifyUsersToken], courses.getCourses);

/**
 * @openapi
 * '/api/courses/:course_id':
 *  delete:
 *     tags:
 *     - Courses
 *     summary: Elimina un course segun su id
 *     responses:
 *      201:
 *        description: Updated
 *      404:
 *        description: Course no encontrado
 *      500:
 *        description: Server Error
 */

router.delete('/courses/:course_id', [verifyUsersToken], courses.deleteCourse);

/**
 * @openapi
 * '/api/courses/:id':
 *  get:
 *     tags:
 *     - Courses
 *     summary: Retorna un course por id
 *     responses:
 *      200:
 *        description: OK
 *      204:
 *        description: No hay course
 *      500:
 *        description: Server Error
 */
router.get('/courses/:course_id', [verifyUsersToken], courses.getCoursesById);

/**
 * @openapi
 * '/api/courses':
 *  get:
 *     tags:
 *     - Courses
 *     summary: Crea un course
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              username:
 *                type: string
 *                default: trendding user
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
router.post('/courses', courses.postCourse);

/**
 * @openapi
 * '/api/courses/:course_id':
 *  put:
 *     tags:
 *     - Courses
 *     summary: Actualiza el user segun id
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
router.put('/courses/:course_id', [verifyUsersToken], courses.updateCourse);

//RUTAS PARA LECCIONES

/**
 * @openapi
 * '/api/lections/:lection_id':
 *  delete:
 *     tags:
 *     - Lections
 *     summary: Elimina un lection segun su id
 *     responses:
 *      201:
 *        description: Updated
 *      404:
 *        description: lection no encontrado
 *      500:
 *        description: Server Error
 */

router.delete('/lections/:lection_id', [verifyUsersToken], lections.deleteLection);

/**
 * @openapi
 * '/api/lections/:id':
 *  get:
 *     tags:
 *     - Lections
 *     summary: Retorna un lection por id
 *     responses:
 *      200:
 *        description: OK
 *      204:
 *        description: No hay lection
 *      500:
 *        description: Server Error
 */
router.get('/lections/:course_id', [verifyUsersToken], lections.getLectionsById);

/**
 * @openapi
 * '/api/lections':
 *  get:
 *     tags:
 *     - Lections
 *     summary: Crea un lection
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *            properties:
 *              username:
 *                type: string
 *                default: trendding user
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
router.post('/lections', [verifyUsersToken], lections.postLection);
router.get('/lections', [verifyUsersToken], lections.getLections);

/**
 * @openapi
 * '/api/lections/:lection_id':
 *  put:
 *     tags:
 *     - Lections
 *     summary: Actualiza el user segun id
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
router.put('/lections/:lection_id', [verifyUsersToken], lections.updateLection);

router.get('/categories', [verifyUsersToken], categories.getCategories);
router.post('/categories', [verifyUsersToken], categories.postCategorie);
router.delete('/categories/:categorie_id', [verifyUsersToken], categories.deleteCategorie);

router.get('/teachers', [verifyUsersToken], teachers.getTeachers);
router.post('/teachers', [verifyUsersToken], teachers.postTeacher);
router.delete('/teachers/:teacher_id', [verifyUsersToken], teachers.deleteTeacher);
router.get('/teachers/:teacher_id', [verifyUsersToken], teachers.getTeachersById);


//IMAGENES
router.get('/images/courses/:course_id', [verifyUsersToken], images.getCourseImage);
router.post('/images/courses/', [verifyUsersToken], images.postCourseImage);

router.get('/images/lections/:lection_id', [verifyUsersToken], images.getLectionImage);
router.post('/images/lections/', [verifyUsersToken], images.postLectionImage);

router.get('/images/teachers/:teacher_id', [verifyUsersToken], images.getTeacherImage);
router.post('/images/teachers/', [verifyUsersToken], images.postTeacherImage);

//VIDEOS
router.get('/videos/courses/:course_id', [verifyUsersToken], videos.getCourseVideo);
router.post('/videos/courses/', [verifyUsersToken], videos.postCourseVideo);

router.get('/videos/lections/:lection_id', [verifyUsersToken], videos.getLectionVideo);
router.post('/videos/lections/', [verifyUsersToken], videos.postLectionVideo);

module.exports = router;