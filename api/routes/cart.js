const router = require("express").Router();
const Cart = require('../models/Cart');
const ProductsData = require('../models/ProductsData');
const authMiddleware = require('../authMiddleware'); 

// CREATE CART
router.post('/', authMiddleware, async (req, res) => {
    const { username } = req.body;

    try {
        const existingCart = await Cart.findOne({ username });
        if (existingCart) {
            return res.status(400).json("Cart already exists for this user");
        }

        const newCart = new Cart({ username, items: [] });
        const savedCart = await newCart.save();

        res.status(201).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// ADD ITEM TO CART
router.post('/add/:productId', authMiddleware, async (req, res) => {
    const { username } = req.body;
    const productId = req.params.productId;

    try {
        const cart = await Cart.findOne({ username });
        if (!cart) {
            return res.status(404).json("Cart not found for this user");
        }

        const product = await ProductsData.findById(productId);
        if (!product) {
            return res.status(404).json("Product not found");
        }

        cart.items.push({
            productId,
            quantity: 1, // You can modify this based on your requirements
        });

        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// DELETE ITEM FROM CART
router.delete('/remove/:productId', authMiddleware, async (req, res) => {
    const { username } = req.body;
    const productId = req.params.productId;

    try {
        const cart = await Cart.findOne({ username });
        if (!cart) {
            return res.status(404).json("Cart not found for this user");
        }

        cart.items = cart.items.filter(item => item.productId !== productId);

        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET ALL ITEMS IN CART
router.get('/', authMiddleware, async (req, res) => {
    const { username } = req.body;

    try {
        const cart = await Cart.findOne({ username });
        if (!cart) {
            return res.status(404).json("Cart not found for this user");
        }

        res.status(200).json(cart.items);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
