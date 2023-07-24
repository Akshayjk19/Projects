const mongoose=require('mongoose')

const orderschema=mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    OrderId:{type:Number},
    ProductNumber:{type:Number},
    Date:{type:String}
})
const Order=mongoose.model('Order',orderschema)

module.exports=Order