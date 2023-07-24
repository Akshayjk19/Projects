const TeamMembers=require('./TeamMembersSchema')

const editteammember=async(req,res)=>{
    const {Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,UploadProfilePicture}=req.body

    const _id=req.params.id

     const edit=await TeamMembers.findByIdAndUpdate(_id,{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,UploadProfilePicture})
     res.json(edit)
}
module.exports=editteammember