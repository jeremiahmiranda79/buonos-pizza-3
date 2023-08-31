const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const toppingsSchema = new Schema({
  toppingName: {
    type: String,
    required: true,
    trim: true
  },
  toppingPrice: {
    type: Number,
    required: false,
    min: 0.99
  },
  availability: {
    type: Number,
    min: 0,
    default: 0
  }
});

const Toppings = mongoose.model("Toppings", toppingsSchema);

module.exports = Toppings;