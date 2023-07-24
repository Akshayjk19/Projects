const book =require('./BooksSchema')

const bookedit=async(req,res)=>{
    const {BookName,Author,Publication,Year,Avalibility,Price}=req.body

    const _id=req.params.id
    const edit=await book.findByIdAndUpdate(_id,{BookName,Author,Publication,Year,Avalibility,Price})

    res.json({BookName:edit.BookName,Author:edit.Author,Publication:edit.Publication,Year:edit.Year,Avalibility:edit.Avalibility,Price:edit.Price})
}
module.exports=bookedit