const myFruitFactory = require('../models/FactorySchema');

const findFruit = async (name) => {
  try {
    const data = await myFruitFactory.find({ name });
    return data;
  } catch (err) {
    return err.message;
  }
};

const findFruitByName = async ({ name }) => {
  try {
    const data = await myFruitFactory.findOne({ name });
    return data;
  } catch (err) {
    return err.message;
  }
};

const deleteFruit = async ({ name }) => {
  console.log(name)
  try {
    const data = await myFruitFactory.deleteOne({ name });
    return data;
  } catch (err) {
    return err.message;
  }
};

const createFruit = async (fruitDetails: any) => {
  try {
    const data = await myFruitFactory.create(fruitDetails);
    return data;
  } catch (err) {
    return err.message;
  }
};

module.exports = { findFruit, deleteFruit, createFruit, findFruitByName };
