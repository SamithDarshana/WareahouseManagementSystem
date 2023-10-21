const mongoose = require("mongoose")

const TelevisionSchema = new mongoose.Schema({
    brand: String,
    model: String,
    quantity: Number
})

const TelevisionModel = mongoose.model("televisions", TelevisionSchema) //first collection name

module.exports = TelevisionModel
