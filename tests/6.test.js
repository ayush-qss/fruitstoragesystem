const axios = require('axios');
const apiUrl = 'http://localhost:4000/';

beforeAll(async () => {
    const query = `
    mutation{
        createFruitForFruitStorage(name: "lemon", description: "this is lemon", limit: 10) {
            limit
            description
            name
            }
        }
    `;
    await axios.post(apiUrl, { query });
});

test('This will pass, since it will find "lemon", which is present.', async () => {
    const query = `
        query {
            findFruit(name: "lemon") {
                name
                description
                limit
        }
    }
  `;

    const response = await axios.post(apiUrl, { query });
    expect(response.data).toMatchObject({
        "data": {
            "findFruit": [
                {
                    "name": "lemon",
                    "description": "this is lemon",
                    "limit": 10
                }
            ]
        }

    });
});

// Note : 
// If this test fails, it will have an errors object, so in this test, we are checking that if there is an errors object or not.
// If errors object is present, then test will pass.

test('This test will fail, since "this is lemon" fruit does not exists', async () => {
    const query = `
    {
        findFruit(name: "this is lemon") {
          description
          limit
          name
        }
      }
  `;

    const response = await axios.post(apiUrl, { query });
    expect(response.data.errors).toBeDefined();
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