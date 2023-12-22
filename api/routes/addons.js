// cartRoutes.js

const router = require("express").Router();
const authMiddleware = require('../authMiddleware');
const User = require('../models/User');
const Category = require('../models/Category');

// Route to add addons to a specific product in the user's cart
router.post('/add-addons/:productId', authMiddleware, async (req, res) => {
  try {
    const productId = req.params.productId;
    const selectedAddons = req.body.addons;

    console.log('productId:', productId);
    console.log('selectedAddons:', selectedAddons);

    // Fetch the user
    const userId = req.user._id;
    console.log('userId:', userId);

    const user = await User.findById(userId);

    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User found:', user);

    // Find the product in the user's cart
    const productIndex = user.cart.findIndex(item => item.productId === productId);

    if (productIndex === -1) {
      console.log('Product not found in the cart');
      return res.status(404).json({ message: 'Product not found in the cart' });
    }

    console.log('Product found in the cart:', user.cart[productIndex]);

    // Remaining code...

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
