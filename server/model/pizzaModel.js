const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const sizeEnum = [  
  'Small',
  'Medium',
  'Large',]

  const pizzaName = [
    'Supreme',
    'Meatlover',
    'VeggieLover',
    'Pepperoni',
    'Cheeeeesssy',
    'Margherita'
  ]

  const pizzaType = [
    'Sicilian',
    'Thin',
    'GlutenFree',
    'Cauliflower'
  ]

const pizzaSchema = new Schema({
  pizzaName: {
    type: [String],
    enum: pizzaName,
    required: true,
  },
  pizzaType: {
    type: [String],
    enum: pizzaType,
    required: true,
  },
  pizzaSize: {
    type: [String],
    enum: sizeEnum,
    required: true,
  },
  foodImage: {
    type: String,
    required: false,
  },
  pizzaToppings: [{type: Schema.Types.ObjectId, ref: 'Toppings'}],
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

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
