const {Router} = require('express')
const {check} = require('express-validator')
const router = Router()
const {login, register} = require('../controllers/auth')


router.post('/login',[
  check('email','Email field is empty').not().isEmpty(),
  check('password','password field is empty').not().isEmpty()
],login)


router.post('/register',[
  check('email','Email field is not valid email').isEmail(),
  check('password','Must be 6 characters').isLength({min: 6}),
  check('name','name field is empty').not().isEmpty(),
],register)





module.exports = router