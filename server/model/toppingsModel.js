const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const toppingsSchema = new Schema({
  pizzaName: {
    type: String,
    required: true,
  },
  pizzaType: {
    type: String,
    required: true,
  },
  pizzaSize: {
    type: String,
    required: true,
  },
});

const Toppings = mongoose.model("Toppings", toppingsSchema);

module.exports = Toppings;