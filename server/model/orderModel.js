const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const orderSchema = new Schema({
  totalPrice: {
    type: Number,
    required: false
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  pizzas: [{
    type: Schema.Types.ObjectId,
    ref: 'Pizza',
    required: true
  }],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order