const jwt=require('jsonwebtoken')

const TokenValidation=async(req,res,next)=>{
let Token;

if(req.headers.authorization && req.headers.authorization.startswith("Bearer")){
    try {
        Token=req.headers.authorization.split(" ")[1]
        jwt.verify(Token,process.env.JWT_SECRET)
        res.json('Token is verified')
        next()
        
    } catch (error) {
        res.status('404').send({message:"No Token"})
        throw new Error ("Not Authorization Token")
    }
    
}
if(!Token)
{
    res.status('404').send("No Token")
    throw new Error ("Not Authorization Token")
}
}
module.exports=TokenValidation