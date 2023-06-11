const { objectType, extendType } = require('nexus');
const { findFruit } = require('../../repository/FruitsRepository');

const FruitStorage = objectType({
  name: 'FruitStore',
  definition(t) {
    t.string('name');
    t.string('description');
    t.int('limit');
  },
});

const FruitStorageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('findFruit', {
      type: 'FruitStore',
      async resolve() {
        const data = await findFruit();
        return data;
      },
    });
  },
});

module.exports = { FruitStorageQuery, FruitStorage };