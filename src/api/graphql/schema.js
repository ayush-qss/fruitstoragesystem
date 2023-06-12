const { makeSchema } = require('nexus')
const { FruitStoreMutation, FruitStoreSchema } = require('./FruitsStore')
const { FruitsMutation, FruitsSchema, FruitQuery } = require('./Fruits')
const { join } = require('path')

const schema = makeSchema({
  types: [FruitsSchema, FruitsMutation, FruitStoreMutation, FruitStoreSchema, FruitQuery],
  outputs: {
    typegen: join(__dirname, './schemas', 'nexus-typegen.ts'),
    schema: join(__dirname, './schemas', 'schema.graphql')
  }
})

module.exports = schema
