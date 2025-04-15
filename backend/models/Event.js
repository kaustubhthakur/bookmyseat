const mongoose = require('mongoose')
const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    seats: {
        type: [String],
        default: []
    },
    totalseats: {
        type: Number,
        default: 0,
    },
    maxprice: {
        type: Number,
        default: 10000000,
    },
    minprice: {
        type: Number,
        default: 0,
    }
},
{
        timestamps: true,
})
module.exports = mongoose.model("Event", EventSchema);