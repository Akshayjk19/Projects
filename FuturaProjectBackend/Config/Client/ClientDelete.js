const client=require('./ClientSchema')

const clientdelete=async(req,res)=>{
    const {Name,UserName,Email,SignedStatus,Role,PhoneNumber}=req.body

    const _id=req.params.id
    const del=await client.findByIdAndDelete(_id)
    res.json('Data Removed')
}
module.exports=clientdelete