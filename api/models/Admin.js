const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
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
            default:"admin",
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Admin', AdminSchema);
