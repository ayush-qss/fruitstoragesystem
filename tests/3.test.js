/* eslint-disable no-undef */
const axios = require('axios')
const apiUrl = 'http://localhost:4000/'

beforeAll(async () => {
  const query = `
    mutation{
        createFruitForFruitStorage(name: "lemon", description: "this is a lemon", limit: 10) {
            limit
            description
            name
            }
        }
    `
  await axios.post(apiUrl, { query })
})

// Note :
// If this test fails, it will have an errors object, so in this test, we are checking that if there is an errors object or not.
// If errors object is present, then test will pass.

test('This test case will fail, since we are not passing "forcedelete" field.', async () => {
  const query = `
    mutation {
        deleteFruitFromFruitStorage(name: "lemon") {
          name
          limit
          description
        }
      }
`

  const response = await axios.post(apiUrl, { query })
  expect(response.data).toHaveProperty('errors')
})

test('This test case will Pass, since we are passing "forcedelete : true" field.', async () => {
  const query = `
    mutation {
        deleteFruitFromFruitStorage(name: "lemon", forceDelete: true) {
          name
          limit
          description
        }
      }
`

  const response = await axios.post(apiUrl, { query })
  expect(response.data).toMatchObject({
    data: {
      deleteFruitFromFruitStorage: {
        name: null,
        limit: null,
        description: null
      }
    }
  })
})

afterAll(async () => {
  const query = `
    mutation{
        deleteFruitFromFruitStorage(name: "lemon", forceDelete: true) {
          limit
          description
          name
        }
      }
  `
  await axios.post(apiUrl, { query })
})
