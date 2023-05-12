const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    Email:{type:String},
    Password:{type:String}
})
const UserData=mongoose.model('UserData',userschema)

module.exports=UserData