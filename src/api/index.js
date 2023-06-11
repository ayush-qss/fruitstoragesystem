const { FruitStorageQuery, FruitStorage } = require("./graphql/FruitStorage")
const { FruitFactoryMutation, FruitFactory } = require("./graphql/FruitFactory")

module.exports = [FruitStorage, FruitFactory, FruitStorageQuery, FruitFactoryMutation]