const axios = require('axios');
const apiUrl = 'http://localhost:4000/';

beforeAll(async () => {
    const query = `
    mutation{
        createFruitForFruitStorage(name: "lemon", description: "this is a lemon", limit: 10) {
            limit
            description
            name
            }
        }
    `;
    await axios.post(apiUrl, { query });
});

test('We are updating the description of lemon.This will pass.', async () => {
    const query = `
    mutation{
        updateFruitForFruitStorage(name: "lemon", description: "updated lemon description") {
          name
          description
          limit
        }
      }
`;

    const response = await axios.post(apiUrl, { query });
    expect(response.data).toMatchObject({
        "data": {
            "updateFruitForFruitStorage": {
                "name": "lemon",
                "description": "updated lemon description",
                "limit": 10
            }
        }
    });
});

// Note : 
// If this test fails, it will have an errors object, so in this test, we are checking that if there is an errors object or not.
// If errors object is present, then test will pass.

test('This test case, will fail since we are updating description with more than 30 letters.', async () => {
    const query = `
    mutation{
        updateFruitForFruitStorage(name: "mango", description: "this is a fruit with a very long description") {
          name
          description
          limit
        }
    }
  `;

    const response = await axios.post(apiUrl, { query });
    expect(response.data).toHaveProperty('errors');
});

afterAll(async () => {
    const query = `
    mutation{
        deleteFruitFromFruitStorage(name: "lemon", forceDelete: true) {
          limit
          description
          name
        }
      }
  `;
    await axios.post(apiUrl, { query });
});