const UserData = require("./UserSchema")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const login=async(req,res)=>{
    const {Email,Password}=req.body
    const email=await UserData.findOne({Email})
    const PasswordCheck=await bcrypt.compare(Password,email.Password)
    
    if(email && PasswordCheck){
        res.json({Message:"Successfully Login",Token:CreateToken(email._id)})
    }
    else{
        res.json('Login Failed')
    }
}
const CreateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
}
module.exports=login