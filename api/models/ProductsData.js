const mongoose = require('mongoose')

const ProductsDataSchema = new mongoose.Schema(
    {   
        username:{
            type: String,
            required: true,
        },
            title :{
            type: String,
            required: true,
            unique: true
        },
        photo:{
            type: String,
            required: true,
            default:" "
        },
        price:{
            type: Number,
            required: true,
        },
        rating:{
            type: Number,
            required: true,
            default:" "
        },
        category:{
            type: String,
            required: true,
        },
        comments:{
            type: Array,
            required: false,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('ProductsData',ProductsDataSchema)