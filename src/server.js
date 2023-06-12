const { ApolloServer } = require('apollo-server')
const schema = require('./api/graphql/schema')

const server = new ApolloServer({
  schema
})

module.exports = { server }
