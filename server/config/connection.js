const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(
  // process.env.BUONOSDB_URI || 
  'mongodb://127.0.0.1:27017/BUONOSDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;