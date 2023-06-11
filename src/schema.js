const { makeSchema } = require('nexus');
const { join } = require('path');
const { FruitStorageQuery, FruitStorage } = require("./api/graphql/FruitStorage")
const { FruitFactoryMutation, FruitFactory } = require("./api/graphql/FruitFactory")

const schema = makeSchema({
  types: [FruitFactory, FruitFactoryMutation, FruitStorageQuery, FruitStorage],
});

module.exports = schema