const FruitsStoreSchema = require("../models/FruitsStoreSchema")

const findFruitFromStore = async ({ name }) => {
    try {
        const data = await FruitsStoreSchema.find({ name })
        return data
    } catch (err) {
        throw new Error(err)
    }
}

const createFruit = async ({ name, amount }) => {
    try {
        const data = await FruitsStoreSchema.create({ name, amount })
        return data
    } catch (err) {
        throw new Error(err)
    }
}

const updateFruit = async ({ name, amount }) => {
    try {
        const data = await FruitsStoreSchema.findOneAndUpdate({ name }, { amount }, { new: true })
        return data
    } catch (err) {
        throw new Error(err)
    }
}

const deleteFruit = async ({ name }) => {
    try {
        const data = await FruitsStoreSchema.deleteOne({ name })
        return data
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = { createFruit, updateFruit, deleteFruit, findFruitFromStore }