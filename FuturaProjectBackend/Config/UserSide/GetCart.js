const user=require('./UsersideSchema')

const getcart=async(req,res)=>{
    const userid=req.body.userid

    const data = await user.findOne({_id:userid}).populate('cart')

    if(data)
    {
        res.send({message:'Get Cart Success', data : data })
    }else{
        res.send({message:'Error In get cart'})
    }

}
module.exports=getcart