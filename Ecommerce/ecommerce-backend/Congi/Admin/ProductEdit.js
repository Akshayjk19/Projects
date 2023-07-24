const product = require('./ProductSchema')

const editproduct=async(req,res)=>{

    try {
        const {Name, Brand, Model, Description, Quantity, Price, Category}=req.body
        
        const id =  req.params.id
        const editdata = await product.findByIdAndUpdate(id,{Name, Brand, Model, Description, Quantity, Price, Category})

        res.send({
            msg:"Edit Success",
            Id:editdata._id,
            Name:editdata.Name,
            Brand:editdata.Brand,
            Model:editdata.Model,
            Description:editdata.Description,
            Quantity:editdata.Quantity,
            Price:editdata.Price,
            Category:editdata.Category
        })
    } catch (error) {
        console.log(`Error  ${error}`)
        res.status(500).send({
            msg: "Error in Edit",
            error,
          });
    }
   
}
module.exports=editproduct