const { objectType, extendType, nonNull, stringArg, intArg } = require('nexus');
const { createFruitService, removeFruitService } = require('../../services/FruitsStoreService');

const FruitStoreSchema = objectType({
  name: 'FruitStore',
  definition(t) {
    t.string('name');
    t.int('amount');
  },
});

const FruitStoreMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('storeFruitToFruitStorage', {
      type: 'FruitStore',
      args: {
        name: nonNull(stringArg()),
        amount: nonNull(intArg()),
      },
      async resolve(_root, args) {
        const fields = {
          name: args.name,
          amount: args.amount,
        };
        const data = await createFruitService({ ...fields });
        return data;
      },
    }),
      t.nonNull.field('removeFruitFromFruitStorage', {
        type: 'FruitStore',
        args: {
          name: nonNull(stringArg()),
          amount: nonNull(intArg()),
        },
        async resolve(_root, args) {
          const fields = {
            name: args.name,
            amount: args.amount,
          };
          const data = await removeFruitService({ ...fields });
          return data;
        },
      });
  },
});

module.exports = { FruitStoreMutation, FruitStoreSchema };