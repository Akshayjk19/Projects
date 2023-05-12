const mongoose=require('mongoose')

const customerschema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    AddressLine:{type:String},
    City:{type:String},
    State:{type:String},
    PinCode:{type:Number},
    Country:{type:String}
})
const customer=mongoose.model('customer',customerschema)

module.exports=customer