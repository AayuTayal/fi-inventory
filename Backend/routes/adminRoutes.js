const express = require("express");
const router = express.Router();
const User = require("../models/User");
const isAdmin = require("../middlewares/admin");


/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get all users (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users (excluding passwords)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   username:
 *                     type: string
 *                   isAdmin:
 *                     type: boolean
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       403:
 *         description: Forbidden - Not an admin
 *       500:
 *         description: Server error while fetching users
 */
// GET /admin/users
router.get("/users", isAdmin, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});


const Product = require("../models/Product");
/**
 * @swagger
 * /admin/analytics:
 *   get:
 *     summary: Get basic product analytics (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Analytics data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalProducts:
 *                   type: integer
 *                 mostAddedSKU:
 *                   type: string
 *       401:
 *         description: Unauthorized - Token missing or invalid
 *       403:
 *         description: Forbidden - Only admin can access
 *       500:
 *         description: Server Error
 */
// GET /admin/analytics
router.get("/analytics", isAdmin, async (req, res) => {
  try {
    const topProducts = await Product.find().sort({ quantity: -1 }).limit(3);
    res.status(200).json({
      message: "Top added products",
      topProducts
    });
  } catch (error) {
    res.status(500).json({ message: "Error generating analytics" });
  }
});

module.exports = router;
