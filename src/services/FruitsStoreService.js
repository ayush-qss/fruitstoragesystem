const { createFruit, updateFruit, deleteFruit, findFruitFromStore } = require("../repository/FruitsStoreRepository")
const { errorMessages } = require("../constants/errorConstants")
const { findFruitService: findFruitFromFruits } = require("./FruitsService")

const createFruitService = async ({ name, amount }) => {
    try {
        if (!name || amount <= 0) {
            throw new Error(errorMessages.InvalidFields)
        }
        const isFruitExist = await findFruitFromFruits({ name, forFruitStore: true })
        if (isFruitExist[0].limit < amount) {
            throw new Error(`Maximum fruit limit is ${isFruitExist[0].limit}.`)
        }
        const isFruitExistInStore = await findFruitFromStore({ name })
        if (isFruitExistInStore.length !== 0) {
            throw new Error(errorMessages.FruitExists)
        }
        const data = await createFruit({ name, amount })
        return data;
    } catch (err) {
        throw new Error(err.message)
    }
}

const removeFruitService = async ({ name, amount }) => {
    try {
        if (!name) {
            throw new Error(errorMessages.InvalidFields)
        }
        const isFruitExist = await findFruitFromStore({ name })
        if (isFruitExist.length === 0) {
            throw new Error(errorMessages.FruitNotFound)
        }
        if (isFruitExist[0].amount < amount) {
            throw new Error(`Fruit amount is ${isFruitExist[0].amount}`)
        }
        amount = isFruitExist[0].amount - amount
        const data = await updateFruit({ name, amount })
        if (data.amount === 0) {
            const data = await deleteFruit({ name })
            return data
        }
        return data;
    } catch (err) {
        throw new Error(err.message)
    }
}

const deleteFruitService = async ({ name }) => {
    try {
        if (!name) {
            throw new Error(errorMessages.InvalidFields)
        }
        const isFruitExist = await findFruitFromStore({ name })
        if (isFruitExist.length === 0) {
            throw new Error(errorMessages.FruitNotFound)
        }
        const data = await deleteFruit({ name })
        return data
    } catch (err) {
        throw new Error(err.message)
    }
}

module.exports = { createFruitService, removeFruitService, deleteFruitService }
