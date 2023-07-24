const mongoose = require("mongoose");

const productschema = mongoose.Schema({
  Name: { type: String },
  Brand: { type: String },
  Model: { type: String },
  Description: { type: String },
  Quantity: { type: Number },
  Price: { type: Number },
  Category: { type: String },
});

const Product = mongoose.model("Product", productschema);

module.exports = Product;
