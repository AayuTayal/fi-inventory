// controllers/productController.js

const Prod = require("../models/Product");

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { name, type, sku, image_url, description, quantity, price } = req.body;

    if (!name || !type || !sku || quantity == null || price == null) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newProduct = await Prod.create({
      name,
      type,
      sku,
      image_url,
      description,
      quantity,
      price,
      userId: req.userId, // From JWT middleware
    });

    res.status(201).json({ product_id: newProduct._id });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Update quantity of a product (by product ID)
const updateQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;

    if (quantity == null) {
      return res.status(400).json({ message: "Quantity is required" });
    }

    const updated = await Prod.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId }, // ensure the product belongs to the logged-in user
      { quantity },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Product not found or not owned by user" });
    res.status(200).json({ quantity: updated.quantity });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all products for logged-in user
const getProducts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const products = await Prod.find({ userId: req.userId }).skip(skip).limit(limit);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  addProduct,
  updateQuantity,
  getProducts,
};
