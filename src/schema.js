const { makeSchema } = require('nexus');
const { FruitStorageQuery, FruitStorage } = require("./api/graphql/FruitsStore")
const { FruitsMutation, FruitsSchema } = require("./api/graphql/Fruits")

const schema = makeSchema({
  types: [FruitsSchema, FruitsMutation, FruitStorageQuery, FruitStorage],
});

module.exports = schema