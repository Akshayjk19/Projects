const customer=require('./CustomerSchema')

 const customereachdata=async(req,res)=>{
    const {Name,Email,AddressLine,City,State,PinCode,Country}=req.body

    const _id=req.params.id
    const eachdata=await customer.findById(_id)
    res.json(eachdata)
 }
 module.exports=customereachdata