const {
  findFruit,
  deleteFruit,
  createFruit,
  findFruitByName,
} = require('../repository/FruitFactory');
const { ApolloError } = require('apollo-server');
const { errorNames } = require('../constants/errorConstants.js');

const findFruitService = async ({ name }) => {
  if (!name) {
    throw new Error(errorNames.NameRequired);
  }
  const data = await findFruit(name);
  return {
    data,
    err: null,
  };
};

const createFruitService = async ({ name, description, limit }) => {
  if (!name || !description || limit < 0) {
    throw new Error(errorNames.AllFieldsRequired);
  }
  if (description.length > 30) {
    throw new Error(errorNames.DescriptionLimit);
  }
  const isNameExists = await findFruitByName({ name });
  if (isNameExists) {
    throw new Error(errorNames.FruitExists);
  }
  const data = await createFruit({ name, description, limit });
  return data;
};

const deleteFruitService = async ({ name, forceDelete }) => {
  if (!name) {
    throw new Error(errorNames.AllFieldsRequired);
  }
  if (forceDelete) {
    const data = await deleteFruit({ name });
    console.log(data)
    return data;
  }
  return;
};

module.exports = { findFruitService, createFruitService, deleteFruitService };
