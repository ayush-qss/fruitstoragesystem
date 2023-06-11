const { objectType, extendType, nonNull, stringArg, intArg } = require('nexus');
const { FruitStoreMutation } = require('./mutations/FruitsStoreMutations');

const FruitStoreSchema = objectType({
  name: 'FruitStore',
  definition(t) {
    t.string('name');
    t.int('amount');
  },
});

module.exports = { FruitStoreMutation, FruitStoreSchema };