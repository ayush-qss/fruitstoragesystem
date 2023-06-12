const FruitsSchema = require('../models/FruitsSchema')

const findFruit = async ({ name }) => {
  try {
    const data = await FruitsSchema.find({ name })
    return data
  } catch (err) {
    throw new Error(err)
  }
}

const deleteFruit = async ({ name }) => {
  try {
    const data = await FruitsSchema.deleteOne({ name })
    return data
  } catch (err) {
    throw new Error(err)
  }
}

const createFruit = async (fruitDetails) => {
  try {
    const data = await FruitsSchema.create(fruitDetails)
    return data
  } catch (err) {
    throw new Error(err)
  }
}

const updateFruit = async ({ name, description, limit }) => {
  try {
    const data = await FruitsSchema.findOneAndUpdate(
      { name },
      { description, limit },
      { new: true }
    )
    return data
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = { findFruit, deleteFruit, createFruit, updateFruit }
