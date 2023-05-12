const mongoose=require('mongoose')

const connection=async()=>{
    try {
        const connect=await mongoose.connect("mongodb+srv://akshayjayakrishnane:akshayjk19112000@akshay.z7sdk2e.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,

        })
        console.log("Database is Running")
    } catch (error) {
        console.log(`Error ${error}`)
        process.exit()
        
    }
}
module.exports=connection