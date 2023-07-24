const order=require('./Order')

const orderdataadd=async(req,res)=>{
    const {FirstName,LastName,OrderId,ProductNumber,Date}=req.body

    const check=await order.findOne({OrderId})

    if(check)
    {
        res.json('Already exist')
    }
    else{
        const dataadd=await order.create({FirstName,LastName,OrderId,ProductNumber,Date})
        res.json(dataadd)
    }
}
module.exports=orderdataadd