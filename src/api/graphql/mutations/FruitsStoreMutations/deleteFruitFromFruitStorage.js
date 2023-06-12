// const { nonNull, stringArg, intArg } = require('nexus');
// const { deleteFruitService } = require("../../../../services/FruitsStoreService"); // Import the service responsible for creating fruits

// const deleteFruitFromFruitStorage = {
//     type: 'FruitStore',
//     args: {
//         name: nonNull(stringArg()),
//     },
//     async resolve(_root, args) {
//         const fields = {
//             name: args.name,
//         };
//         const data = await deleteFruitService({ ...fields });
//         return data;
//     },
// }

// module.exports = { deleteFruitFromFruitStorage };
