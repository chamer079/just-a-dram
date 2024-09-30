// Imports
const mongoose = require("mongoose")

// Schema
const reviewSchema = new mongoose.Schema({
    review: { type: String, required: true },
    user: { type: String, required: true },
})

const whiskySchema = new mongoose.Schema({
    whiskyImg: { type: String, requierd: true },
    name: { type: String, required: true },
    distillery: { type: String, required: true },
    typeOfWhisky: { type: String, required: true },
    country: { type: String, required: true },
    age: { type: String, required: true },
    proof: { type: Number, required: true },
    abv: { type: String, required: true },
    hue: { type: String, required: true },
    flavor: { type: String, required: true },
    reviews: [ reviewSchema ],
})

// Model
const Whisky = mongoose.model("Whisky", whiskySchema)

// Export
module.exports = Whisky