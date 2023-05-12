const order=require('./Order')

const viewdata=async(req,res)=>{
    const data=await order.find({})
    res.json(data)
}
module.exports=viewdata