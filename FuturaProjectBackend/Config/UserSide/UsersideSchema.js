const mongoose=require('mongoose')

const usersideschema=mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    Email:{type:String},
    Password:{type:String},
    cart:[{type:mongoose.Schema.Types.ObjectId, ref:'Book'}]
})
const User=mongoose.model('User',usersideschema)

module.exports=User