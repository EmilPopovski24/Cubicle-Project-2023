const mongoose = require('mongoose');

const accesssorySchema = new mongoose.Schema({
    name: String,
    descripton: String,
    imageUrl: String,
});

const Accessory = mongoose.model("Accessory", accesssorySchema);

module.exports = Accessory;