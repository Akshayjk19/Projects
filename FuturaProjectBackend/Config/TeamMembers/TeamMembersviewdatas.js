const TeamMembers=require('./TeamMembersSchema')

const teammemberdataview=async(req,res)=>{
    const teammembers=await TeamMembers.find({})
    res.json(teammembers)
}
module.exports=teammemberdataview