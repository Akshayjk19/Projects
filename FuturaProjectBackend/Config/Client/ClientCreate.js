const client=require('./ClientSchema')

const clientcreate=async(req,res)=>{
    const {Name,UserName,Email,SignedStatus,Role,PhoneNumber}=req.body

    const username=await client.findOne({UserName})

    if(username)
    {
        res.json('User Already exist')
    }else{

    const clientdata=await client.create({
        Name,UserName,Email,SignedStatus,Role,PhoneNumber
    })
    res.json({
        Id:clientdata._id,
        Name:clientdata.Name,
        Username:clientdata.UserName,
        Email:clientdata.Email,
        SignedStatus:clientdata.SignedStatus,
        Role:clientdata.Role,
        PhoneNumber:clientdata.PhoneNumber
    })
}

}
module.exports=clientcreate