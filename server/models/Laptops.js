const mongoose = require("mongoose")

const LaptopSchema = new mongoose.Schema({
    brand: String,
    model: String,
    quantity: Number
})

const LaptopModel = mongoose.model("laptops", LaptopSchema) //first collection name

module.exports = LaptopModel
