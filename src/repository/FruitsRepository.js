const FruitsSchema = require('../models/FruitsSchema');

const findFruit = async ({ name }) => {
  try {
    const data = await FruitsSchema.find({ name });
    return data;
  } catch (err) {
    return err.message;
  }
};

const deleteFruit = async ({ name }) => {
  try {
    const data = await FruitsSchema.deleteOne({ name });
    return data;
  } catch (err) {
    return err.message;
  }
};

const createFruit = async (fruitDetails) => {
  try {
    const data = await FruitsSchema.create(fruitDetails);
    return data;
  } catch (err) {
    return err.message;
  }
};

const updateFruit = async ({ name, description, limit }) => {
  try {
    const data = await FruitsSchema.updateOne(
      { name },
      { description, limit }
    );
    return data;
  } catch (err) {
    return err.message;
  }
};

module.exports = { findFruit, deleteFruit, createFruit, updateFruit };
