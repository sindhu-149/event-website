const router =require("express").Router()
const Category = require('../models/Category')
const authMiddleware = require('../authMiddleware');



// router.post('/', async(req,res) =>{
//     const newCat = new Category(req.body);
//     try{
//         const savedCat = await newCat.save()
//         res.status(200).json(savedCat)
//     }catch(err){
//         res.status(500).json(err)

//     }
// })


router.post('/', authMiddleware, async (req, res) => {
    const { role } = req.user;

    if (role !== 'admin') {
        return res.status(403).json({ message: 'Permission denied. Only admin can add products.' });
    }

    const newCat = new Category(req.body);
    try{
        const savedCat = await newCat.save()
        res.status(200).json(savedCat)
    }catch(err){
        res.status(500).json(err)

    }
});

router.get('/', async(req,res) =>{
    try{
        const cats = await Category.find()
        res.status(200).json(cats)
    }catch(err){
        res.status(500).json(err)

    }
})
// Assuming you have the Category model and authMiddleware already imported

// Update category by ID
router.put('/:id', authMiddleware, async (req, res) => {
    const { role } = req.user;

    if (role !== 'admin') {
        return res.status(403).json({ message: 'Permission denied. Only admin can update categories.' });
    }

    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } 
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete category by ID
router.delete('/:id', authMiddleware, async (req, res) => {
    const { role } = req.user;

    if (role !== 'admin') {
        return res.status(403).json({ message: 'Permission denied. Only admin can delete categories.' });
    }

    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);

        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router


