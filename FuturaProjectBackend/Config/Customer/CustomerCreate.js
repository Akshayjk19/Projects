const customer=require('./CustomerSchema')

const customercreate=async(req,res)=>{
    const {Name,Email,AddressLine,City,State,PinCode,Country}=req.body

   
    const namefind=await customer.findOne({Name})

    if(namefind){
        res.json('Customer Already In There')
    }else{
        const createcustomer=await customer.create({
            Name,Email,AddressLine,City,State,PinCode,Country
        })
        res.json(createcustomer)
    }

}
module.exports=customercreate