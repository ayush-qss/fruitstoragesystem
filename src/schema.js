const { makeSchema } = require('nexus');
const { FruitStorageQuery, FruitStorage } = require("./api/graphql/FruitsStore")
const { FruitsMutation, FruitsSchema, FruitQuery } = require("./api/graphql/Fruits")

const schema = makeSchema({
  types: [FruitsSchema, FruitsMutation, FruitStorageQuery, FruitStorage, FruitQuery],
});

module.exports = schema