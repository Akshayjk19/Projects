const Teammember=require('./TeamMembersSchema')

const deleteteammember=async(req,res)=>{
    const {Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,UploadProfilePicture}=req.body

    const _id=req.params.id
    const deletemember=await Teammember.findByIdAndDelete(_id)
    res.json("deleted")
}
module.exports=deleteteammember