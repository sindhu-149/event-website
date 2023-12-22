const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(
    {   
        username:{
        type: String,
        require: true
        }
       
    },
    {timestamps: true}
)

module.exports = mongoose.model('cart', CartSchema)