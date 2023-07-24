const user = require('./UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login =async(req,res)=>{
    const {Email,Password}=req.body

    const findEmail=await user.findOne({Email})

    

    if(findEmail){
        const checkpassword = await bcrypt.compare(Password,findEmail.Password)
        if(checkpassword)
        {
            res.json({msg:"Successfully Login",Token:CreateToken(findEmail._id)})
        }else{
            res.json({msg:"Password is incorrect"})
        }
    }else{
        res.json({msg:"Login Failed"})

    }
}

const CreateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
}

module.exports=login