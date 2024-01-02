const router =require("express").Router()
const User = require('../models/Admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


router.post('/register', async(req, res) =>{
    try {
        const salt = await bcrypt.genSalt(10)
        const hassedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = User({
            username: req.body.username,
            email: req.body.email,
            password: hassedPass,
        })
        const user = await newUser.save()
        const token = jwt.sign({ userId: user._id, role: user.role }, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).json({ user, token });
    } catch (err) {
       res.status(500).json(err) 
    }
})


router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            res.status(400).json('Invalid username');
            return;
        }

        const validated = await bcrypt.compare(req.body.password, user.password);

        if (!validated) {
            res.status(400).json('Incorrect Password');
            return;
        }

        // Generate and send JWT token
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

        const { password, ...others } = user._doc;
        res.status(200).json({ user: others, token });

    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router


