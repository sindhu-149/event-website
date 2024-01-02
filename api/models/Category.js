const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
    {
        name :{
            type: String,
            required: true
        },
        photo:{
            type: String,
            required: true,
        },
        addons:{
            type:Array,
            required:false
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Categories', CategorySchema)