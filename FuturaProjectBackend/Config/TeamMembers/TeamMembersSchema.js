const mongoose=require('mongoose')

const teammembersschema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    DateOfBirth:{ type:String},
    Gender:{type:Boolean},
    Description:{type:String},
    Role:{type:String},
    PhoneNumber:{type:Number},
    UploadProfilePicture:{type:String}

})
const TeamMembers=mongoose.model('TeamMembers',teammembersschema)

module.exports=TeamMembers