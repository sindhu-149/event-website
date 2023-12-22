const router = require('express').Router();
const User = require('../models/User');
const ProductsData = require('../models/ProductsData');
const authMiddleware = require('../authMiddleware');

// Update or add product to user's cart
router.post('/add-to-cart', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userId;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { productId, addons, quantity } = req.body;

        // Check if the product already exists in the cart
        const existingItemIndex = user.cart.findIndex((item) => item.product.toString() === productId);

        if (existingItemIndex !== -1) {
            // If the product already exists, update the quantity
            user.cart[existingItemIndex].quantity += quantity;
        } else {
            // If the product is not in the cart, add a new item
            user.cart.push({
                product: productId,
                addons,
                quantity,
            });
        }

        await user.save();

        res.status(200).json({ message: 'Product added to the cart successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

router.delete('/remove-from-cart/:productId/', authMiddleware, async (req, res) => {
    try {
        const productId = req.params.productId;
        const userId = req.user.userId;

        // Find the user
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const cartIndex = user.cart.findIndex(item => item.product.toString() === productId);

        if (cartIndex === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        user.cart.splice(cartIndex, 1);

        await user.save();

        res.status(200).json({ message: 'Product removed from cart successfully', cart: user.cart });
    } catch (error) {
        console.error('Error removing product from cart:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});





router.get('/', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).populate({
            path: 'cart.product',
            model: 'ProductsData',  // Replace with the actual model name for ProductsData
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user.cart);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});




module.exports = router;
