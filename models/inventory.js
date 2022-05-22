const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema

const inventorySchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        index: true,
        lowercase: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Inventory', inventorySchema)