const UserData = require("./UserSchema")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const signup=async(req,res)=>{
    try {
        const {FirstName,LastName,Email,Password}=req.body
    const checkdata=await UserData.findOne({Email})
    if(!FirstName || !LastName || !Email || !Password){
        return res.status(404).send({message:" Field is Required"})
    }
    if(checkdata) //checking email if its already exist or not
    {
        res.status(404).send({success:true,message:'Email Already Used'}) //if user aready exist
    }
    else if(Password.length >= 6 ) //check password length
    {
        const salt=await bcrypt.genSalt(10)
        const hashpassword=await bcrypt.hash(Password,salt) //password hashing
        
        //user create
        const Dataadd=await UserData.create({
            FirstName,LastName,Email,Password:hashpassword
        })
        res.status(404).json({
            Success:true,
            message:'User Register Successfully',
            Id:Dataadd._id,
            FirstName:Dataadd.FirstName,
            LastName:Dataadd.LastName,
            Email:Dataadd.Email,
            Password:Dataadd.Password,
            Token:CreateToken(Dataadd._id)
        
        })
    }
    else{
        res.status(404).send({message:'Password length should be more than 6'})
    }
        
    } catch (error) {
        console.log(error);
        res.status(404).send({
            success:false,
            message:'Error in registration',
            error
        })
    }
    
}
const CreateToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
    }
module.exports=signup