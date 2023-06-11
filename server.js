const { ApolloServer } = require('apollo-server');
const { makeSchema } = require('nexus');
const schema = require('./schema');
const { getErrorMessage } = require('./constants/errorConstants.js');

const server = new ApolloServer({
  schema,
  formatError(err) {
    const error = getErrorMessage(err?.message)
    return { message: error.message, statusCode: error.statusCode };
  },
});

module.exports = { server };
