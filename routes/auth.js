const {Router} = require('express')
const {check} = require('express-validator')
const router = Router()
const {login, register} = require('../controllers/auth')

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: the user's email
 *         password:
 *           type: string
 *           description: The user's password
 *         name:
 *           type: string
 *           description: the user's name
 *       example:
 *         email: culoabirerto@hotmail.com
 *         password: williamlevy
 *         name: johnny
 */


router.post('/login',[
  check('email','Email field is empty').not().isEmpty(),
  check('password','password field is empty').not().isEmpty()
],login)


router.post('/register',[
  check('email','Email field is not valid email').isEmail(),
  check('password','Must be 6 characters').isLength({min: 6}),
  check('name','name field is empty').not().isEmpty(),
],register)


/**
 * @swagger
 * /login:
 *   post:
 *     summary: Enviar email y contraseña para iniciar sesion
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *          description: El usuario ha iniciado sesion.
 *       500:
 *          description: error.
*/

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Enviar nombre, email y contraseña para registrarse
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *          description: El usuario ha iniciado sesion.
 *          content:
              application/json:
                schema:
 *       500:
 *          description: error.
*/


module.exports = router