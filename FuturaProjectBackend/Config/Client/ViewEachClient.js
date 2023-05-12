const client=require('./ClientSchema')


const eachclient=async(req,res)=>{
    const {Name,UserName,Email,SignedStatus,Role,PhoneNumber}=req.body

    const _id=req.params.id
    const eachone=await client.findById(_id)

    res.json(eachone)
}
module.exports=eachclient