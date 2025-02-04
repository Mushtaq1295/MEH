const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true, default: "Accessories" },
  price: { type: Number, required: true },
  available: { type: Number, required: true },
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;
