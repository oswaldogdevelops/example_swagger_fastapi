


const create = (req,res) => {
 
    const {name, quantity, expyear, category} = req.body;
    const errors = validationResult(req)

    if(!errors.isEmpty()){
      return res.json({
          ok:false,
          errors: errors.mapped()
      })}else{

    if(!req.cookies.name){
     res.cookie(name , {quantity:quantity, expyear:expyear, category:category})
    }
 
    return res.json({
        ok:true,
        name:name,
        expyear: expyear,
        quantity:quantity,
        category: category
    })
  }


}


const edit = (req,res) =>{
    
  
      
        const {name, quantity , expyear, category} = req.body;
        req.cookies.name = name
        const errors = validationResult(req)

    if(!errors.isEmpty()){
      return res.json({
          ok:false,
          errors: errors.mapped()
      })}else{
        
       
        if(req.cookies.name && req.cookies.name == name){
           res.cookie(name , {quantity:quantity, expyear:expyear, category:category})
           req.cookies.products  = req.cookies.name
           
      return res.json({
        ok:true,
        name: name,
        quantity:quantity,
        expyear: expyear,
        msg:'Category has been edited'
      })   
    }
  else{
      return res.json({
        ok:false,
        msg:'Category does not exist'
      })
    }
   
  }
}

const list = (req,res) =>{

  allproducts = req.cookies.products
 console.log(allproducts)
     return res.json({
      ok: true,
      products: allproducts
     })
 
 }


module.exports = {
    create,edit,list
}