const {
  deleteFruit,
  createFruit,
  findFruit,
  updateFruit,
} = require('../repository/FruitsRepository');
const { errorMessages } = require('../constants/errorConstants.js');
const { fruitCreated, fruitUpdated, fruitDeleted } = require("../utils/helper.js")
const mongoose = require('mongoose');

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
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    if (!name || !description || limit <= 0) {
      await session.abortTransaction();
      await session.endSession();
      throw new Error(errorMessages.AllFieldsRequired);
    }
    if (description.length > 30) {
      await session.abortTransaction();
      await session.endSession();
      throw new Error(errorMessages.DescriptionLimit);
    }
    const isNameExists = await findFruit({ name });
    if (isNameExists.length > 0) {
      await session.abortTransaction();
      await session.endSession();
      throw new Error(errorMessages.FruitExists);
    }

    const data = await createFruit({ name, description, limit });

    await session.commitTransaction();
    await session.endSession();
    fruitCreated(data);
    return data;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err.message);
  }
};

const deleteFruitService = async ({ name, forceDelete }) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    if (!name || forceDelete === null || forceDelete === undefined) {
      await session.abortTransaction();
      await session.endSession();
      throw new Error(errorMessages.AllFieldsRequired);
    }
    const isNameExists = await findFruit({ name });
    if (isNameExists.length === 0) {
      await session.abortTransaction();
      await session.endSession();
      throw new Error(errorMessages.FruitNotFound);
    }
    if (forceDelete) {
      const data = await deleteFruit({ name });
      fruitDeleted(data);
      return data;
    }
    await session.commitTransaction();
    await session.endSession();
    return;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err.message)
  }
};

const updateFruitService = async ({ name, description, limit }) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    if (!name) {
      await session.abortTransaction();
      await session.endSession();
      throw new Error(errorMessages.NameRequired);
    }

    const isNameExists = await findFruit({ name });

    if (isNameExists.length === 0) {
      await session.abortTransaction();
      await session.endSession();
      throw new Error(errorMessages.FruitNotFound);
    }

    if (description?.length > 0 && description?.length > 30) {
      await session.abortTransaction();
      await session.endSession();
      throw new Error(errorMessages.DescriptionLimit);
    }
    if (limit <= 0) {
      await session.abortTransaction();
      await session.endSession();
      throw new Error(errorMessages.InvalidLimit);
    }

    const data = await updateFruit({ name, description, limit });
    session.commitTransaction();
    session.endSession();
    fruitUpdated(data);
    return data;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err.message)
  }
};

module.exports = { findFruitService, createFruitService, deleteFruitService, updateFruitService };
