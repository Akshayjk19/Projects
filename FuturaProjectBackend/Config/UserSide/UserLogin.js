const usersideschema=require('./UsersideSchema')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const userLogin=async(req,res)=>{
    try {
        const {Email,Password}=req.body

        if(!Email || !Password)
        {
            res.json({success:false,message:'Field is Empty'})
        }

    const email=await usersideschema.findOne({Email})
    console.log(email);
    const checkpassword=await bcrypt.compare(Password,email.Password)
    if(!email || !checkpassword)
    {
        res.json({success:false,message:'Inavild Email or Password'})
    }
    
    else if(email && checkpassword){
         res.json({success:true,message:'Successfully Login',id:email._id,email:Email,password:Password,Token:createtoken(email._id)})
    }else{
        res.json("Login Failed")
    }
        
    } catch (error) {
        console.log(error);
        res.status(404).send({
            success:false,
            message:'Error in Login',
            error
        })
    }
    
}
const createtoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}
module.exports=userLogin