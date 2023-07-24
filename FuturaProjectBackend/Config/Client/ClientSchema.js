const mongoose=require('mongoose')

const clientschema=mongoose.Schema({
    Name:{type:String},
    UserName:{type:String},
    Email:{type:String},
    SignedStatus:{type:Boolean},
    Role:{type:String},
    PhoneNumber:{type:Number}
})
const Client=mongoose.model('Client',clientschema)

module.exports=Client