const customer=require('./CustomerSchema')

const customerdelete=async(req,res)=>{
    const {Name,Email,AddressLine,City,State,PinCode,Country}=req.body

    const _id=req.params.id
    const customerdel=await customer.findByIdAndDelete(_id)
    res.json('Deleted data')
}
module.exports=customerdelete