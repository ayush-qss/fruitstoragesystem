const { ApolloServer } = require('apollo-server');
const { makeSchema } = require('nexus');
const schema = require('./schema');
const { getErrorMessage } = require('./constants/errorConstants.js');

const server = new ApolloServer({
  schema,

});

module.exports = { server };
