const mongoose = require('mongoose');

const model = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
});

const FruitSchema = mongoose.model('fruits', model);

module.exports = FruitSchema
