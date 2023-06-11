const {
  objectType,
  extendType,
  stringArg,
  nonNull,
  intArg,
  booleanArg,
} = require('nexus');
const {
  findFruitService,
  createFruitService,
  deleteFruitService,
  updateFruitService
} = require('../../services/FruitsService');

const FruitsSchema = objectType({
  name: 'Fruit',
  definition(t) {
    t.string('name');
    t.string('description');
    t.int('limit');
  },
});

const FruitsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.list.field('findFruit', {
      type: 'Fruit',
      args: {
        name: nonNull(stringArg()),
      },
      async resolve(_root, args) {
        const data = await findFruitService({ name: args.name });
        return data;
      },
    }),
      t.nonNull.field('createFruitForFruitStorage', {
        type: 'Fruit',
        args: {
          name: nonNull(stringArg()),
          description: nonNull(stringArg()),
          limit: nonNull(intArg()),
        },
        async resolve(_root, args) {
          const fields = {
            name: args.name,
            description: args.description,
            limit: args.limit,
          };
          const data = await createFruitService({ ...fields });
          return data;
        },
      }),
      t.nonNull.field('deleteFruitFromFruitStorage', {
        type: 'Fruit',
        args: {
          name: nonNull(stringArg()),
          forceDelete: nonNull(booleanArg()),
        },
        async resolve(_root, args) {
          const fields = {
            name: args.name,
            forceDelete: args.forceDelete,
          };
          const data = await deleteFruitService({ ...fields });
          return data;
        },
      }),
      t.nonNull.field('updateFruitForFruitStorage', {
        type: 'Fruit',
        args: {
          name: nonNull(stringArg()),
          limit: nonNull(intArg()),
          description: nonNull(stringArg()),
        },
        async resolve(_root, args) {
          const fields = {
            name: args.name,
            limit: args.limit,
            description: args.description,
          };
          const data = await updateFruitService({ ...fields });
          return data;
        },
      });
  },
});

module.exports = { FruitsMutation, FruitsSchema };
