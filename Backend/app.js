require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

const { swaggerUi, swaggerSpec } = require('./swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/api-docs-json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec); // from swagger.js
});


// Middleware
app.use(cors());
app.use(express.json());
// After middleware
const authRoutes = require("./routes/authRoutes");
app.use("/", authRoutes);
const productRoutes = require("./routes/productRoutes");
app.use("/", productRoutes); 
const adminRoutes = require("./routes/adminRoutes");
app.use("/admin", adminRoutes);


// Routes placeholder
app.get("/", (req, res) => {
  res.send("Inventory API is running...");
});

// MongoDB + Server start
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log('Server running on PORT', PORT);
    });
  } catch (err) {
    console.error("MongoDB connection failed", err.message);
    process.exit(1);
  }
};

startServer();
