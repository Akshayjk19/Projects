const teammember = require('./TeamMembersCreate')
const TeamMembers=require('./TeamMembersSchema')

const viewteammembers=async(req,res)=>{
    const {Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,UploadProfilePicture}=req.body

    const _id=req.params.id
    const teammember=await TeamMembers.findById(_id)
    res.json(teammember)
}
module.exports=viewteammembers