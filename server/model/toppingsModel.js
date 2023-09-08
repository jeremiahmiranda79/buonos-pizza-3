const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const toppingsSchema = new Schema({
  toppingName: {
    type: String,
    required: false,
    trim: true
  },
  toppingPrice: {
    type: Number,
    required: false,
    min: 0.99
  }
});

const Toppings = model("Toppings", toppingsSchema);

module.exports = Toppings;