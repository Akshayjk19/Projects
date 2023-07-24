const product = require("./ProductSchema");

const productadd = async (req, res) => {
 

  try {
    const { Name, Brand, Model, Description, Quantity, Price, Category } =
    req.body;

  const findmodel = await product.findOne({ Model });

  if(findmodel)
  {
    res.send({msg:"Product is Already Exist"});
  }else{
    const addProduct= await product.create({
        Name,Brand,Model,Description,Quantity,Price,Category
    })

    res.send({
        msg:"Successfully Added",
        Id:addProduct._id,
        Name:addProduct.Name,
        Brand:addProduct.Brand,
        Model:addProduct.Model,
        Description:addProduct.Description,
        Quantity:addProduct.Quantity,
        Price:addProduct.Price,
        Category:addProduct.Category
    })
  }

  } catch (error) {
    console.log(` Error ${error}`);
    res.status(500).send({
      msg: "Error in Add Product",
      error,
    });
  }
};

module.exports=productadd