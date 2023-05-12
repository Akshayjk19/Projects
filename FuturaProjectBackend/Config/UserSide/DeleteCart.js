const user=require('./UsersideSchema')

const removefromcart = async (req, res) => {
    const { userid, productid } = req.body;

    const deletecart=await user.findByIdAndUpdate(userid,{$pull:{cart: productid}})

    if(deletecart)
    {
        return res.json({deletecart})
        console.log(deletecart)
    }
    else
    {
        return res.status(400).json("Some Error in Delete Cart")
    }

    //   // Remove product from cart
    //   const deletecart = await user.updateOne(
    //     { _id: userid },
    //     { $pull: { cart: productid } }
    //   )
    
    //   if(deletecart){
    //     res.send({message:'Delete Cart Successfully'})
    // }else{
    //     res.send({message:'Error In get cart'})
    // }

      }
      
      module.exports=removefromcart