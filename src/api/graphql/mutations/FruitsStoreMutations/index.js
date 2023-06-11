const { nonNull, stringArg, intArg, extendType } = require("nexus");
const { storeFruitToFruitStorage } = require('./storeFruitToFruitStorage');
const { removeFruitFromFruitStorage } = require('./removeFruitFromFruitStorage');
const { removeFruitService } = require("../../../../services/FruitsStoreService"); // Import the service responsible for removing fruits

const FruitStoreMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('storeFruitToFruitStorage', storeFruitToFruitStorage),
            t.nonNull.field('removeFruitFromFruitStorage', removeFruitFromFruitStorage);
    },
});

module.exports = { FruitStoreMutation };
