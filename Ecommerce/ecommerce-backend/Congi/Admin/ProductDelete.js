const product = require('./ProductSchema')

const deleteproduct = async(req,res)=>{
    try {
        const id = req.params.id
        const deleteproduct= await product.findByIdAndDelete(id)

        res.send({
            msg:"Deleted Successfully"
        })
    } catch (error) {
        console.log(`Error ${error}`)
        res.status(500).send({
            msg:"Error in delete product",
            error
        })
    }
}

module.exports=deleteproduct