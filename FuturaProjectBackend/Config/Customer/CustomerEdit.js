const customer=require('./CustomerSchema')

const customeredit=async(req,res)=>{
    const {Name,Email,AddressLine,City,State,PinCode,Country}=req.body
    const _id=req.params.id
    const editcustomer=await customer.findByIdAndUpdate(_id,{Name,Email,AddressLine,City,State,PinCode,Country})
    res.json(editcustomer)

}
module.exports=customeredit