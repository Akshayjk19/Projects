const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    Name:{type:String,require:true},
    Email:{type:String,require:true,unique:true},
    Password:{type:String,require:true,},
    PhoneNumber:{type:Number,require:true},
    Address:{type:String,require:true},
    Role:{type:Number,default:0}
},{timestamps:true})

const EcommerceUser = mongoose.model("EcommerceUser",userschema)

module.exports=EcommerceUser