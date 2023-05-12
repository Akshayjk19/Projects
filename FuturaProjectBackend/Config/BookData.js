const book=require('./BooksSchema')

const bookdata=async(req,res)=>{
    const {BookName,Author,Publication,Year,Avalibility,Price}=req.body

    const bookname=await book.findOne({BookName})

    if(bookname)
    {
        res.json("Book Alreay added")
    }
    else
    {
        const bookcreate=await book.create({
            BookName,Author,Publication,Year,Avalibility,Price
        })
        res.json({
            Id:bookcreate._id,
            BookName:bookcreate.BookName,
            Author:bookcreate.Author,
            Publication:bookcreate.Publication,
            Year:bookcreate.Year,
            Avalibility:bookcreate.Avalibility,
            Price:bookcreate.Price
        })
    }
}
module.exports=bookdata