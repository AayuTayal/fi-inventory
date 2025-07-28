// models/Product.js

const mongoose = require("mongoose");

const prodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // to track which user added the product
    required: true,
  },
}, { timestamps: true });

// Compound unique index: unique sku per user
prodSchema.index({ userId: 1, sku: 1 }, { unique: true });

module.exports = mongoose.model("Prod", prodSchema);
