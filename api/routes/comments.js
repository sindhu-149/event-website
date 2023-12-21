const router = require("express").Router();
const Comments = require('../models/Comments');
const ProductsData = require('../models/ProductsData');

// CREATE COMMENT
router.post('/:productId', async (req, res) => {
    const { username, des, rating } = req.body;
    const productId = req.params.productId;

    try {
        const product = await ProductsData.findById(productId);
        if (!product) {
            return res.status(404).json("Product not found");
        }

        const newComment = new Comments({
            username,
            des,
            rating,
        });

        product.comments.push(newComment);
        await product.save();

        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json(error);
    }
});

// UPDATE COMMENT
router.put('/:productId/:commentId', async (req, res) => {
    const { des, rating } = req.body;
    const productId = req.params.productId;
    const commentId = req.params.commentId;

    try {
        const product = await ProductsData.findById(productId);
        if (!product) {
            return res.status(404).json("Product not found");
        }

        const comment = product.comments.id(commentId);
        if (!comment) {
            return res.status(404).json("Comment not found");
        }

        comment.des = des;
        comment.rating = rating;

        await product.save();

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json(error);
    }
});

// DELETE COMMENT
router.delete('/:productId/:commentId', async (req, res) => {
    const productId = req.params.productId;
    const commentId = req.params.commentId;

    try {
        const product = await ProductsData.findById(productId);
        if (!product) {
            return res.status(404).json("Product not found");
        }

        product.comments.pull(commentId);
        await product.save();

        res.status(200).json("Comment has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET COMMENT
router.get('/:productId/:commentId', async (req, res) => {
    const productId = req.params.productId;
    const commentId = req.params.commentId;

    try {
        const product = await ProductsData.findById(productId);
        if (!product) {
            return res.status(404).json("Product not found");
        }

        const comment = product.comments.id(commentId);
        if (!comment) {
            return res.status(404).json("Comment not found");
        }

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET ALL COMMENTS FOR A PRODUCT
router.get('/:productId', async (req, res) => {
    const productId = req.params.productId;

    try {
        const product = await ProductsData.findById(productId);
        if (!product) {
            return res.status(404).json("Product not found");
        }

        res.status(200).json(product.comments);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
