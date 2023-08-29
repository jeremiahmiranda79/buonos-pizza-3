const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const pizzaSchema = new Schema({
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
  foodImage: {
    type: String,
    required: false,
  },
  pizzaPrice: {
    type: Number,
    required: true,
    min: 0.99,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
});

const Pizza = mongoose.model("Pizza", productSchema);

module.exports = Pizza;
