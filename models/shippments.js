const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema

const shippmentSchema = new mongoose.Schema({
    fromAddress: {
        type: String,
        tirm:true,
        required: true
    },
    toAddress: {
        type: String,
        trim: true,
        required: true
    },
    labelId: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    items: [
        {
            name: String,
            quantity: Number,
            price: Number
        }
    ]
}, {timestamps: true})

module.exports = mongoose.model('Shipment', shippmentSchema)


