import mongoose from 'mongoose';

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

const FruitStorageSchema = mongoose.model('FruitStorage', model);

module.exports = FruitStorageSchema;
