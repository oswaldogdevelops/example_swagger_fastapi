const {Router} = require('express')
const {check} = require('express-validator')
const router = Router()
const { create, edit, list} = require('../controllers/product')


router.post('/crear',[
    check('name','name field is empty').not().isEmpty(),
    check('quantity','quantity field is empty').not().isEmpty(),
    check('category','category field is empty').not().isEmpty(),
    check('expyear','year of expire field is empty').not().isEmpty()
  ],create)


router.post('/editar',[
    check('name','name field is empty').not().isEmpty(),
    check('quantity','quantity field is empty').not().isEmpty(),
    check('category','category field is empty').not().isEmpty(),
    check('expyear','year of expire field is empty').not().isEmpty()
  ],edit)

router.get('/listar',list)





module.exports = router