const mongoose=require('mongoose')

const bookschema=mongoose.Schema({
    BookImage:{type:String},
    BookName:{type:String},
    Author:{type:String},
    Publication:{type:String},
    Year:{type:Number},
    Avalibility:{type:String},
    Price:{type:Number},
})

const Book=mongoose.model('Book',bookschema)

module.exports=Book;