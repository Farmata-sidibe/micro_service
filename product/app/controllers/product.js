const Product = require("../models/product.js");


exports.add = async (req, res) => {
  
  try {
    const { name, price, description } = req.body;
    
    const product = new Product({
      name: name,
      price: price,
      description: description
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while creating product.",
    });
  }
};

exports.view = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "product not found." });
    }

    res.status(200).json({product});
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while connected product.",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const {name, price, description } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {name, price, description},
      {new : true}
    )
   
    if (!product) {
      return res.status(404).json({ message: "product not found." });
    }
    res.status(200).json({product});
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while connected product.",
    });
  }
};

exports.delete = async (req, res) => {
  
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "product not found." });
    }
  
    res.status(200).json({ msg: 'Product removed'});
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Server Error",
    });
  }
};
