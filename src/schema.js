const { makeSchema } = require('nexus');
const { FruitStoreMutation, FruitStoreSchema } = require("./api/graphql/FruitsStore")
const { FruitsMutation, FruitsSchema, FruitQuery } = require("./api/graphql/Fruits")

const schema = makeSchema({
  types: [FruitsSchema, FruitsMutation, FruitStoreMutation, FruitStoreSchema, FruitQuery],
});

module.exports = schema