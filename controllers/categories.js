

const create = (req,res) => {
  //check first is user is authenticated
  if(req.cookies.user){
  const {category,products} = req.body;
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.json({
        ok:false,
        errors: errors.mapped()
    })}else{

 
  if(!req.cookies.category){
    res.cookie(category , {category:category, products:products})
  }
  
return res.json({
  ok:true,
  category: category,
  msg:'Category has been created'
})
    }
  
}else{
return res.json({
  ok:false,
  msg:'need to auth first to use endpoint'
})
}

}


const edit = (req,res) =>{
    if(req.cookies.user){

      const {category,products} = req.body
       
      req.cookies.category = category
      const errors = validationResult(req)

      if(!errors.isEmpty()){
        return res.json({
            ok:false,
            errors: errors.mapped()
        })}else{

if(req.cookies.category && req.cookies.category == category){
  res.cookie(category , {category:category, products:products})
        return res.json({
            ok:true,
            category: category,
            msg:'Category has been edited'
          })
}
        }
    }else{
        return res.json({
            ok:false,
            msg:'need to auth first to use endpoint'
          })
    }
}

module.exports = {
    create,edit
}