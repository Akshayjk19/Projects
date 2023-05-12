const order=require('./Order')

const orderdelete=async(req,res)=>{
    const _id=req.params.id

    const del =await order.findByIdAndDelete(_id)
    res.json("deleted Successfully");
}
module.exports=orderdelete