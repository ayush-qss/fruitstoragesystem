import {
  objectType,
  extendType,
  stringArg,
  nonNull,
  intArg,
  booleanArg,
} from 'nexus';
const {
  findFruitService,
  createFruitService,
  deleteFruitService
} = require('../../services/FruitFactory');

export const FruitFactory = objectType({
  name: 'FruitFactory',
  definition(t) {
    t.string('name');
    t.string('description');
    t.int('limit');
  },
});

export const FruitFactoryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.list.field('findFruit', {
      type: 'FruitFactory',
      args: {
        name: nonNull(stringArg()),
      },
      async resolve(_root, args) {
        const { data } = await findFruitService({ name: args.name });
        return data;
      },
    }),
      t.nonNull.field('createFruitForFruitStorage', {
        type: 'FruitFactory',
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
        type: 'FruitFactory',
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
      });
  },
});
