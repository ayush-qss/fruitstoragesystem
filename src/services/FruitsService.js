const {
  deleteFruit,
  createFruit,
  findFruit,
  updateFruit,
} = require('../repository/FruitsRepository');
const { errorMessages } = require('../constants/errorConstants.js');
const { fruitCreated, fruitUpdated, fruitDeleted } = require("../utils/helper.js")

const findFruitService = async ({ name, forFruitStore }) => {
  try {
    if (!name) {
      throw new Error(errorMessages.NameRequired);
    }
    const data = await findFruit({ name });
    if (data.length === 0) {
      if (forFruitStore) {
        throw new Error(errorMessages.FruitNotFound + " in Fruits.");
      }
      throw new Error(errorMessages.FruitNotFound);
    }
    return data;
  } catch (err) {
    throw new Error(err.message)
  }
};

const createFruitService = async ({ name, description, limit }) => {
  try {

    if (!name || !description || limit <= 0) {
      throw new Error(errorMessages.AllFieldsRequired);
    }
    if (description.length > 30) {
      throw new Error(errorMessages.DescriptionLimit);
    }
    const isNameExists = await findFruit({ name });
    if (isNameExists.length > 0) {
      throw new Error(errorMessages.FruitExists);
    }
    const data = await createFruit({ name, description, limit });
    fruitCreated(data);
    return data;
  } catch (err) {
    throw new Error(err.message)
  }
};

const deleteFruitService = async ({ name, forceDelete }) => {
  try {
    if (!name || forceDelete === null || forceDelete === undefined) {
      throw new Error(errorMessages.AllFieldsRequired);
    }
    const isNameExists = await findFruit({ name });
    if (isNameExists.length === 0) {
      throw new Error(errorMessages.FruitNotFound);
    }
    if (forceDelete) {
      const data = await deleteFruit({ name });
      fruitDeleted(data);
      return data;
    }
    return;
  } catch (err) {
    throw new Error(err.message)
  }
};

const updateFruitService = async ({ name, description, limit }) => {
  try {
    if (!name) {
      throw new Error(errorMessages.NameRequired);
    }

    const isNameExists = await findFruit({ name });

    if (isNameExists.length === 0) {
      throw new Error(errorMessages.FruitNotFound);
    }

    if (description?.length > 0 && description?.length > 30) {
      throw new Error(errorMessages.DescriptionLimit);
    }
    if (limit <= 0) {
      throw new Error(errorMessages.InvalidLimit);
    }

    const data = await updateFruit({ name, description, limit });
    fruitUpdated(data);
    return data;
  } catch (err) {
    throw new Error(err.message)
  }
};

module.exports = { findFruitService, createFruitService, deleteFruitService, updateFruitService };
