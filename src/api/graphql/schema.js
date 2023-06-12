const { makeSchema } = require('nexus')
const { FruitStoreMutation, FruitStoreSchema } = require('./FruitsStore')
const { FruitsMutation, FruitsSchema, FruitQuery } = require('./Fruits')

const schema = makeSchema({
  types: [FruitsSchema, FruitsMutation, FruitStoreMutation, FruitStoreSchema, FruitQuery]
})

module.exports = schema
