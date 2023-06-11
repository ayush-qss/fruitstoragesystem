import mongoose from 'mongoose';

const FactorySchema = new mongoose.Schema({
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

const myFactorySchema = mongoose.model('fruitfactories', FactorySchema);

module.exports = myFactorySchema
