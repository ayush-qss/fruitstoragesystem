const { makeSchema } = require('nexus');
const { join } = require('path');
const { FruitStorageQuery, FruitStorage } = require("./api/graphql/FruitStorage")
const { FruitFactoryMutation, FruitFactory } = require("./api/graphql/FruitFactory")

const schema = makeSchema({
  types: [FruitStorageQuery, FruitStorage, FruitFactoryMutation, FruitFactory],
  outputs: {
    typegen: join(__dirname, './models', 'nexus-typegen.ts'), // 2
    schema: join(__dirname, './models', 'schema.graphql'), // 3
  },
});

module.exports = schema