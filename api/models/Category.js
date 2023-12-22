const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
    {
        name :{
            type: String,
            require: true
        },
        photo:{
            type: String,
            require: true,
        },
        addons:{
            type:Array,
            require:false
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Categories', CategorySchema)