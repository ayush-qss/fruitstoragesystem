const { makeSchema } = require('nexus');
const { join } = require('path');
import * as types from  "./api/graphql/FruitFactory"

const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, './models', 'nexus-typegen.ts'), // 2
    schema: join(__dirname, './models', 'schema.graphql'), // 3
  },
});

module.exports = schema