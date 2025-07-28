const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/auth");
const { addProduct, updateQuantity, getProducts } = require("../controllers/productController");

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new product
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - sku
 *               - quantity
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               sku:
 *                 type: string
 *               image_url:
 *                 type: string
 *               description:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product created
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server Error
 */
router.post('/products', verifyToken, addProduct);

/**
 * @swagger
 * /products/{id}/quantity:
 *   put:
 *     summary: Update the quantity of a product
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Product updated
 *       400:
 *         description: Quantity is required
 *       404:
 *         description: Product not found or not owned by user
 *       500:
 *         description: Server Error
 */
router.put("/products/:id/quantity", verifyToken, updateQuantity);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products for the logged-in user
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of products
 *       500:
 *         description: Server Error
 */
router.get("/products", verifyToken, getProducts);

module.exports = router;
