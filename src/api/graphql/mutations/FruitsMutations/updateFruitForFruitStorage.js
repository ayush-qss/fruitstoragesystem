const { nonNull, stringArg, intArg } = require("nexus")
const { updateFruitService } = require("../../../../services/FruitsService")

const updateFruitForFruitStorage = {
    type: 'Fruit',
    args: {
        name: nonNull(stringArg()),
        limit: intArg(),
        description: stringArg(),
    },
    async resolve(_root, args) {
        const fields = {
            name: args.name,
            limit: args?.limit,
            description: args?.description,
        };
        const data = await updateFruitService({ ...fields });
        return data;
    },
}

module.exports = updateFruitForFruitStorage