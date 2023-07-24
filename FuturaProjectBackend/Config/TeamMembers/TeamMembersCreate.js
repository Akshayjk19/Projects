const TeamMembers=require('./TeamMembersSchema')
const multer=require('multer')

const teammember=async(req,res)=>{
    const{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,UploadProfiePicture}=req.body

    
    const checkname=await TeamMembers.findOne({Name})

    if(checkname)
    {
        res.json('Member Already Exist')
    }else{
        const teammemberdata=await TeamMembers.create({
            Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,UploadProfiePicture
        })
        res.json(teammemberdata)
    }

}
module.exports=teammember