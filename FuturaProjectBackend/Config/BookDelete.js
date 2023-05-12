const book=require('./BooksSchema')

const BookDelete=async(req,res)=>{
    // const {BookName,Author,Publication,Year,Avalibility}=req.body
    // const name=req.params.BookName
    const _id=req.params.id
    const del=await book.findByIdAndDelete(_id)
    res.json("Data Removed")
}
module.exports=BookDelete