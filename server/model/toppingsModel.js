const mongoose = require("mongoose");

const { model, Schema } = mongoose;


const pizzaTopppings = [
  'Pepperoni',
  'Ham',
  'Sausage',
  'Onions',
  'BlackOlives',
  'GreenPeppers',
  'Cheese'
]

const toppingsSchema = new Schema({
  toppingName: {
    type: [String],
    enum: pizzaTopppings,
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