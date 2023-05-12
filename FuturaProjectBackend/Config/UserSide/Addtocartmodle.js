const mongoose=require('mongoose')
const user=require('./UsersideSchema')

const addtocart=async(req,res)=>{
    const { userid, productid } = req.body;
    console.log(req.body);
  

    const update= await user.findByIdAndUpdate(userid,{
      
        $addToSet:{cart:productid}
    
    })
    console.log(productid);
    console.log(update);
    if(update ){
        return res.send({message:'Add to cart successfull'})
    
    }else{
        return res.send({message:'Something error in add to cart'})
    }
// return res.send('add')
}

module.exports=addtocart