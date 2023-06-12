const { nonNull, stringArg, booleanArg } = require('nexus')
const { deleteFruitService } = require('../../../../services/FruitsService')

const deleteFruitFromFruitStorage = {
  type: 'Fruit',
  args: {
    name: nonNull(stringArg()),
    forceDelete: booleanArg()
  },
  async resolve (_root, args) {
    const fields = {
      name: args.name,
      forceDelete: args.forceDelete
    }
    const data = await deleteFruitService({ ...fields })
    return data
  }
}

module.exports = deleteFruitFromFruitStorage
