const mongoose = require('mongoose')

const ProductsDataSchema = new mongoose.Schema(
    {
               title :{
            type: String,
            require: true,
            unique: true
        },
        photo:{
            type: String,
            require: true,
            default:" "
        },
        price:{
            type: Number,
            require: true,
        },
        rating:{
            type: Number,
            require: true,
            default:" "
        },
        category:{
            type: String,
            require: true,
        },
        comments:{
            type: Array,
            required: false,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('ProductsData',ProductsDataSchema)