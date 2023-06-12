const {
  objectType,
  extendType
} = require('nexus')
const { createFruitForFruitStorage, deleteFruitFromFruitStorage, updateFruitForFruitStorage } = require('../../api/graphql/mutations/FruitsMutations')
const { findFruit } = require('../../api/graphql/queries/FruitsQuery')

const FruitsSchema = objectType({
  name: 'Fruit',
  definition (t) {
    t.string('name')
    t.string('description')
    t.int('limit')
  }
})

const FruitQuery = extendType({
  type: 'Query',
  definition (t) {
    t.nonNull.list.field('findFruit', findFruit)
  }
})

const FruitsMutation = extendType({
  type: 'Mutation',
  definition (t) {
    t.nonNull.field('createFruitForFruitStorage', createFruitForFruitStorage)
    t.nonNull.field('deleteFruitFromFruitStorage', deleteFruitFromFruitStorage)
    t.nonNull.field('updateFruitForFruitStorage', updateFruitForFruitStorage)
  }
})

module.exports = { FruitsMutation, FruitsSchema, FruitQuery }
