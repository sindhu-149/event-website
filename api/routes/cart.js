// const router = require("express").Router();
// const Cart = require('../models/Cart');
// const ProductsData = require('../models/ProductsData');
// const authMiddleware = require('../authMiddleware'); 

// // CREATE CART
// router.post('/', authMiddleware, async (req, res) => {
//     const { username } = req.body;

//     try {
//         const existingCart = await Cart.findOne({ username });
//         if (existingCart) {
//             return res.status(400).json("Cart already exists for this user");
//         }

//         const newCart = new Cart({ username, items: [] });
//         const savedCart = await newCart.save();

//         res.status(201).json(savedCart);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // ADD ITEM TO CART
// router.post('/add/:productId', authMiddleware, async (req, res) => {
//     const { username } = req.body;
//     const productId = req.params.productId;

//     try {
//         const cart = await Cart.findOne({ username });
//         if (!cart) {
//             return res.status(404).json("Cart not found for this user");
//         }

//         const product = await ProductsData.findById(productId);
//         if (!product) {
//             return res.status(404).json("Product not found");
//         }

//         cart.items.push({
//             productId,
//             quantity: 1, // You can modify this based on your requirements
//         });

//         await cart.save();

//         res.status(200).json(cart);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // DELETE ITEM FROM CART
// router.delete('/remove/:productId', authMiddleware, async (req, res) => {
//     const { username } = req.body;
//     const productId = req.params.productId;

//     try {
//         const cart = await Cart.findOne({ username });
//         if (!cart) {
//             return res.status(404).json("Cart not found for this user");
//         }

//         cart.items = cart.items.filter(item => item.productId !== productId);

//         await cart.save();

//         res.status(200).json(cart);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // GET ALL ITEMS IN CART
// router.get('/', authMiddleware, async (req, res) => {
//     const { username } = req.body;

//     try {
//         const cart = await Cart.findOne({ username });
//         if (!cart) {
//             return res.status(404).json("Cart not found for this user");
//         }

//         res.status(200).json(cart.items);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// module.exports = router;


// const router = require("express").Router();
// const Cart = require('../models/Cart');
// const ProductsData = require('../models/ProductsData');
// const User = require('../models/User');
// const authMiddleware = require('../authMiddleware');

// // CREATE CART
// router.post('/', authMiddleware, async (req, res) => {
//     const { username } = req.body;

//     try {
//         const existingCart = await Cart.findOne({ username });
//         if (existingCart) {
//             return res.status(400).json("Cart already exists for this user");
//         }

//         const newCart = new Cart({ username, items: [] });
//         const savedCart = await newCart.save();

//         // Update the user's cart array
//         const user = await User.findOneAndUpdate(
//             { username },
//             { $push: { cart: savedCart._id } },
//             { new: true }
//         );

//         res.status(201).json(savedCart);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // ADD ITEM TO CART
// router.post('/add/:productId', authMiddleware, async (req, res) => {
//     const { username } = req.body;
//     const productId = req.params.productId;

//     try {
//         const cart = await Cart.findOne({ username });
//         if (!cart) {
//             return res.status(404).json("Cart not found for this user");
//         }

//         const product = await ProductsData.findById(productId);
//         if (!product) {
//             return res.status(404).json("Product not found");
//         }

//         cart.items.push({
//             productId,
//             quantity: 1,
//         });

//         await cart.save();

//         // Update the user's cart array
//         const user = await User.findOneAndUpdate(
//             { username },
//             { $push: { cart: cart._id } },
//             { new: true }
//         );

//         res.status(200).json(cart);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // DELETE ITEM FROM CART
// router.delete('/remove/:productId', authMiddleware, async (req, res) => {
//     const { username } = req.body;
//     const productId = req.params.productId;

//     try {
//         const cart = await Cart.findOne({ username });
//         if (!cart) {
//             return res.status(404).json("Cart not found for this user");
//         }

//         cart.items = cart.items.filter(item => item.productId !== productId);

//         await cart.save();

//         // Update the user's cart array
//         const user = await User.findOneAndUpdate(
//             { username },
//             { $push: { cart: cart._id } },
//             { new: true }
//         );
 
//         res.status(200).json(cart);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // GET ALL ITEMS IN CART
// router.get('/', authMiddleware, async (req, res) => {
//     const { username } = req.body;

//     try {
//         const user = await User.findOne({ username }).populate('cart');
//         if (!user) {
//             return res.status(404).json("User not found");
//         }

//         res.status(200).json(user.cart.items);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// module.exports = router;




// cartRoutes.js

const router = require('express').Router();
const User = require('../models/User');
const ProductsData = require('../models/ProductsData');
const authMiddleware = require('../authMiddleware');

// Add product to user's cart
router.post('/add-to-cart/:productId', authMiddleware, async (req, res) => {
    try {
        const user = req.user;
        const product = await ProductsData.findById(req.params.productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const { addons, quantity } = req.body;
        const cartItem = {
            product: req.params.productId,
            addons: addons || [],
            quantity: quantity || 1,
        };

        user.cart.push(cartItem);
        await user.save();

        res.status(200).json({ message: 'Product added to cart successfully', cart: user.cart });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});

// Remove product from user's cart
router.post('/remove-from-cart/:productId', authMiddleware, async (req, res) => {
    try {
        const user = req.user;
        const productId = req.params.productId;

        // Find index of the cart item with the specified product ID
        const index = user.cart.findIndex((item) => item.product.toString() === productId);

        if (index === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        // Remove the item from the cart array
        user.cart.splice(index, 1);
        await user.save();

        res.status(200).json({ message: 'Product removed from cart successfully', cart: user.cart });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});

module.exports = router;
