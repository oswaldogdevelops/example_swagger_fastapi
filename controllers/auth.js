
const {validationResult} = require('express-validator')

const login = (req,res) =>{

    const {email,password} = req.body;


    const errors = validationResult(req)
 //validating fields
    if(!errors.isEmpty()){
        return res.json({
            ok:false,
            errors: errors.mapped()
        })
    }else{
        if(email == req.cookies.user.email && password == req.cookies.user.password ){
           return res.json({
                ok:true,
                email:email,
                password:password,
                msg:'user has started session'
            })
           // console.log(req.cookies.newuser.email)
        }else{
           return res.json({
                ok:false,
               msg:'user does not exist'
            })
           
        }
        
}
}

const register = (req,res) =>{
    const {name,email,password} = req.body;
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.json({
            ok:false,
            errors: errors.mapped()
        })
    }else{

       if(!req.cookies.user){
        res.cookie('user', {email:email, password:password, name:name})
       }
       console.log(req.cookies)
      
    
    return res.json({
        ok:true,
        msg:'The user has registered',
        name:name,
        email:email,
        password:password
    })
}
}


module.exports = {login
    ,register}