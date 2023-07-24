const order=require('./Order')

const ordervieweach=async(req,res)=>{
    
    const _id=req.params.id

    const eachview=await order.findById(_id)
    res.json(eachview)
}
module.exports=ordervieweach