const client=require('./ClientSchema')

const clientedit=async(req,res)=>{
    const {Name,UserName,Email,SignedStatus,Role,PhoneNumber}=req.body
    const _id=req.params.id
    const edit=await client.findByIdAndUpdate(_id,{Name,UserName,Email,SignedStatus,Role,PhoneNumber})
    res.json({Name:edit.Name,UserName:edit.UserName,Email:edit.Email,SignedStatus:edit.SignedStatus,Role:edit.Role,PhoneNumber:edit.PhoneNumber})
}
module.exports=clientedit