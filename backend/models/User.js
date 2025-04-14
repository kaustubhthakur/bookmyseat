const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    },
    avatar: {
        type: String,
        default: ""
    },
    bookedevents: {
        type: [String],
        default: [],
    },
    totalspent: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
})
module.exports = mongoose.model("User", UserSchema)