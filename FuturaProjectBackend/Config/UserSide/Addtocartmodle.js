const mongoose=require('mongoose')
const user=require('./UsersideSchema')

const addtocart=async(req,res)=>{
    const { userid, productid } = req.body;
    
  

    const update= await user.findByIdAndUpdate(userid,{
      
        $addToSet:{cart:productid}
    
    })
    console.log(productid);
    console.log(update);
    if (update.cart.includes(productid)) {
        return res.send({ message: 'Cart is already exist' });
      } else {
        return res.send({ message: 'Add to cart successful' });
      }
    // if(update.cart === productid ){
    //     return res.send({message:'Cart is already exist'})
    
    // }else{
    //     return res.send({message:'Add to cart successfull'})
    // }
    
// return res.send('add')
}

module.exports=addtocart