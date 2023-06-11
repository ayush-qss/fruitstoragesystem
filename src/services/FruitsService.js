const {
  deleteFruit,
  createFruit,
  findFruit,
  updateFruit,
} = require('../repository/FruitsRepository');
const { errorMessages } = require('../constants/errorConstants.js');

const findFruitService = async ({ name }) => {
  if (!name) {
    throw new Error(errorMessages.NameRequired);
  }
  const data = await findFruit({ name });
  if (data.length === 0) {
    throw new Error(errorMessages.FruitNotFound);
  }
  return data;
};

const createFruitService = async ({ name, description, limit }) => {
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
  return data;
};

const deleteFruitService = async ({ name, forceDelete }) => {
  if (!name) {
    throw new Error(errorMessages.AllFieldsRequired);
  }
  const isNameExists = await findFruit({ name });
  if (isNameExists.length === 0) {
    throw new Error(errorMessages.FruitNotFound);
  }
  if (forceDelete) {
    const data = await deleteFruit({ name });
    return data;
  }
  return;
};

const updateFruitService = async ({ name, description, limit }) => {
  if (!name) {
    throw new Error(errorMessages.NameRequired);
  }

  const isNameExists = await findFruit({ name });

  if (isNameExists.length === 0) {
    throw new Error(errorMessages.FruitNotFound);
  }

  if (description.length > 0 && description.length > 30) {
    throw new Error(errorMessages.DescriptionLimit);
  }
  if (limit <= 0) {
    throw new Error(errorMessages.InvalidLimit);
  }

  const data = await updateFruit({ name, description, limit });
  return data;
};

module.exports = { findFruitService, createFruitService, deleteFruitService, updateFruitService };
