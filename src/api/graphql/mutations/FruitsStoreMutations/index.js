const { extendType } = require('nexus')
const { storeFruitToFruitStorage } = require('./storeFruitToFruitStorage')
const { removeFruitFromFruitStorage } = require('./removeFruitFromFruitStorage')
// const { deleteFruitFromFruitStorage } = require('./deleteFruitFromFruitStorage');

const FruitStoreMutation = extendType({
  type: 'Mutation',
  definition (t) {
    t.nonNull.field('storeFruitToFruitStorage', storeFruitToFruitStorage)
    t.nonNull.field('removeFruitFromFruitStorage', removeFruitFromFruitStorage)
  }
})

module.exports = { FruitStoreMutation }
