const { nonNull, stringArg, intArg } = require('nexus');
const { removeFruitService } = require("../../../../services/FruitsStoreService"); // Import the service responsible for creating fruits

const removeFruitFromFruitStorage = {
    type: 'FruitStore',
    args: {
        name: nonNull(stringArg()),
        amount: nonNull(intArg()),
    },
    async resolve(_root, args) {
        const fields = {
            name: args.name,
            amount: args.amount,
        };
        const data = await removeFruitService({ ...fields });
        return data;
    },

}

module.exports = { removeFruitFromFruitStorage };