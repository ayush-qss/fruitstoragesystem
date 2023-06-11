const { stringArg, intArg, nonNull } = require('nexus');
const { createFruitService } = require("../../../../services/FruitsStoreService"); // Import the service responsible for creating fruits

const storeFruitToFruitStorage = {
    type: "FruitStore",
    args: {
        name: nonNull(stringArg()),
        amount: nonNull(intArg()),
    },
    async resolve(_root, args) {
        const fields = {
            name: args.name,
            amount: args.amount,
        };
        const data = await createFruitService({ ...fields });
        return data;
    },
};

module.exports = { storeFruitToFruitStorage };
