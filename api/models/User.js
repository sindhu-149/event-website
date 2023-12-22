// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema(
//     {
//         username: {
//             type: String,
//             require: true,
//             unique: true,
//         },
//         email: {
//             type: String,
//             require: true,
//             unique: true,
//         },
//         password: {
//             type: String,
//             require: true,
//         },
//         profilePic: {
//             type: String,
//             default: "",
//         },
//         role: {
//             type: String,
//             default: "user",
//         },
//         cart:{
//             type:Array,
//             require:false
//         }
//     },
//     { timestamps: true }
// );

// module.exports = mongoose.model('User', UserSchema);


// User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        profilePic: {
            type: String,
            default: "",
        },
        role: {
            type: String,
            default: "user",
        },
        cart: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsData',
                    required: true,
                },
                addons: [
                    {
                        // type: mongoose.Schema.Types.ObjectId,
                        type: String,
                        ref: 'Categories',
                    },
                ],
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
