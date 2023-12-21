const router =require("express").Router()
const User = require('../models/User')
const ProductsData = require('../models/ProductsData')

// CREATE POST
router.post('/', async(req, res) =>{
    const newProduct = new ProductsData(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(err) 
    }
})

// UPDATE POST

router.put('/:id', async(req, res) =>{
    try {
        const product = await ProductsData.findById(req.params.id)
        if (product.username === req.body.username){
            try {
                const updatedProduct = await ProductsData.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body
                    },
                    {new : true}
                )
                res.status(200).json(updatedProduct)
            } catch (err) {
                res.status(500).json(err)
            }
        }else{
            res.status(401).json("You can only update your post")
        }
    } catch (err) {
        res.status(500).json(err)
        
    }
})
// DELETE POST
router.delete('/:id', async(req, res) =>{
    try {
        const product = await ProductsData.findById(req.params.id)
        if (product.username === req.body.username){
            try {
                await ProductsData.deleteOne({ _id: req.params.id });
                res.status(200).json("Post has been deleted")
            } catch (err) {
                res.status(500).json(err)
            }
        }else{
            res.status(401).json("You can delete only your post")
        }
    } catch (err) {
        res.status(500).json(err)
        
    }
})

// GET POST
router.get('/:id', async(req, res) =>{

    try {
        const product = await ProductsData.findById(req.params.id)
        res.status(200).json(product)
        } catch (err) {
          res.status(500).json(err) 
        }

})

// GET ALL POST
router.get('/', async(req, res) =>{
    const username = req.query.user;
    const category = req.query.cat;

    try {
        let products;
        if (username){
        products = await ProductsData.find({username})
        }
        else if(category){
            products = await ProductsData.find({
                category : {
                    $in: [category],
                }
            })
        }
        else{
            products = await ProductsData.find()
        }
        res.status(200).json(products)
        } catch (err) {
          res.status(500).json(err) 
        }

})


module.exports = router