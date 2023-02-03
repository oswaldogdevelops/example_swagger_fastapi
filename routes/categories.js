const {Router} = require('express')
const {check} = require('express-validator')
const router = Router()
const { create, edit } = require('../controllers/categories')


router.post('/crear',[
    check('category','Category field is empty').not().isEmpty(),
    check('products','Product field is empty').not().isEmpty()
  ],create)


router.post('/editar',[
    check('category','Category field is empty').not().isEmpty(),
    check('products','Product field is empty').not().isEmpty()
  ],edit)





module.exports = router