const { nonNull, stringArg } = require('nexus')
const { findFruitService } = require('../../../../services/FruitsService')

const findFruit = {
  type: 'Fruit',
  args: {
    name: nonNull(stringArg())
  },
  async resolve (_root, args) {
    const data = await findFruitService({ name: args.name })
    return data
  }
}

module.exports = findFruit
