const customer=require('./CustomerSchema')

const customerview=async(req,res)=>{
    const{Name,Email,AddressLine,City,State,PinCode,Country}=req.body

    const customerdata=await customer.find({})
    res.json(customerdata)
}
module.exports=customerview