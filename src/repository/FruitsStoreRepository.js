const FruitsStoreSchema = require("../models/FruitsStoreSchema")

const findFruitFromStore = async ({ name }) => {
    try {
        const data = await FruitsStoreSchema.find({ name })
        return data
    } catch (err) {
        return err.message
    }
}

const createFruit = async ({ name, amount }) => {
    try {
        const data = await FruitsStoreSchema.create({ name, amount })
        return data
    } catch (err) {
        return err.message
    }
}

const updateFruit = async ({ name, amount }) => {
    try {
        const data = await FruitsStoreSchema.findOneAndUpdate({ name }, { amount }, { new: true })
        return data
    } catch (err) {
        return err.message
    }
}

const deleteFruit = async ({ name }) => {
    try {
        const data = await FruitsStoreSchema.deleteOne({ name })
        return data
    } catch (err) {
        return err.message
    }
}

module.exports = { createFruit, updateFruit, deleteFruit, findFruitFromStore }