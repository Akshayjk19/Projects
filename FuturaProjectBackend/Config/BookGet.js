const book=require('./BooksSchema')
const bookget=async(req,res)=>{
const {BookName,Author,Publication,Year,Avalibility}=req.body
const bookinfos=await book.find()
res.json(bookinfos);
}
module.exports=bookget