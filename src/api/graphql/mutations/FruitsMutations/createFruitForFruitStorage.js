const { nonNull, stringArg, intArg } = require('nexus')
const { createFruitService } = require('../../../../services/FruitsService')

const createFruitForFruitStorage = {
  type: 'Fruit',
  args: {
    name: nonNull(stringArg()),
    description: nonNull(stringArg()),
    limit: nonNull(intArg())
  },
  async resolve (_root, args) {
    const data = await createFruitService({ ...args })
    return data
  }
}

module.exports = createFruitForFruitStorage
