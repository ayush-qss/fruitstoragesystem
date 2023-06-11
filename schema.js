const { makeSchema } = require('nexus');
const { join } = require('path');
const { FruitStorageQuery, FruitStorage } = require("./api/graphql/FruitStorage")
const { FruitFactoryMutation, FruitFactory } = require("./api/graphql/FruitFactory")

const schema = makeSchema({
  types: [FruitFactory, FruitFactoryMutation, FruitStorageQuery, FruitStorage],
  outputs: {
    typegen: join(__dirname, './models', 'nexus-typegen.ts'), // 2
    schema: join(__dirname, './models', 'schema.graphql'), // 3
  },
});

module.exports = schema