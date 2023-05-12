const client=require('./ClientSchema.js')

const clientview=async(req,res)=>{
    const {Name,UserName,Email,SignedStatus,Role,PhoneNumber}=req.body

    const view=await client.find({})
    res.json(view)
}
module.exports=clientview