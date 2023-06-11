import { objectType, extendType, stringArg, nonNull, intArg } from 'nexus';
const { findFruit } = require('../../repository/FruitFactory');

export const FruitStorage = objectType({
  name: 'FruitFactory',
  definition(t) {
    t.int('id');
    t.string('name');
    t.string('description');
    t.int('limit');
  },
});

export const FruitStorageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('findFruit', {
      type: 'FruitFactory',
      async resolve() {
        const data = await findFruit();
        return data;
      },
    });
  },
});

