const order=require('./Order')

const orderedit=async(req,res)=>{
    const  {FirstName,LastName,OrderId,ProductNumber,Date}=req.body

    const _id=req.params.id

    const edit=await order.findByIdAndUpdate(_id,{FirstName,LastName,OrderId,ProductNumber,Date})
    res.json(edit)

}
module.exports=orderedit