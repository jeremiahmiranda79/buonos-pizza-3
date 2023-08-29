const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const orderSchema = new Schema({
  totalPrice: {
    type: Number,
    required: true
  },
  Customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  Pizza: {
    type: Schema.Types.ObjectId,
    ref: 'Pizza',
    required: true
  },
});

// const Order = mongoose.model('Order', orderSchema);

module.exports = model('Order', orderSchema);