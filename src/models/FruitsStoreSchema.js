const mongoose = require('mongoose');

const model = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const FruitStore = mongoose.model('FruitStore', model);

module.exports = FruitStore;
