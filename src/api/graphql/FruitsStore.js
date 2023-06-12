const { objectType, extendType } = require('nexus')
const { storeFruitToFruitStorage, removeFruitFromFruitStorage } = require('../graphql/mutations/FruitsStoreMutations/index')

const FruitStoreSchema = objectType({
  name: 'FruitStore',
  definition (t) {
    t.string('name')
    t.int('amount')
  }
})

const FruitStoreMutation = extendType({
  type: 'Mutation',
  definition (t) {
    t.nonNull.field('storeFruitToFruitStorage', storeFruitToFruitStorage)
    t.nonNull.field('removeFruitFromFruitStorage', removeFruitFromFruitStorage)
  }
})

module.exports = { FruitStoreMutation, FruitStoreSchema }
