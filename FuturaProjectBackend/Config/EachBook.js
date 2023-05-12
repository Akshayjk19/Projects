const book=require('./BooksSchema')

const Eachbook=async(req,res)=>{
    const {BookName,Author,Publication,Year,Avalibility}=req.body
    const _id=req.params.id

    const eachbook=await book.findById(_id)
    res.json(eachbook)
}
module.exports=Eachbook