const mongoose = require('mongoose')

const CommentsSchema = new mongoose.Schema(
    {   
        username:{
        type: String,
        require: true
        },
        des :{
            type: String,
            require: true
        },
        rating:{
            type: String,
            require: true,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('comments', CommentsSchema)