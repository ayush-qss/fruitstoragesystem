const axios = require('axios');
const apiUrl = 'http://localhost:4000/';

// Note : 
// If this test fails, it will have an errors object, so in this test, we are checking that if there is an errors object or not.
// If errors object is present, then test will pass.

test('this test needs to be fail since, we are creating lemon with long description.', async () => {
    const query = `
  mutation{
    createFruitForFruitStorage(name: "lemon", description: "this is a lemon fruit with a long description", limit: 10) {
        name
        description
        limit
      }
    }
`;

    const response = await axios.post(apiUrl, { query });
    expect(response.data).toHaveProperty("errors");
});

test('This will create "lemon" with description "this is lemon" with a limit of "10"', async () => {
    const query = `
    mutation{
        createFruitForFruitStorage(name: "lemon", description: "this is lemon", limit: 10) {
          limit
          description
          name
        }
      }
  `;

    const response = await axios.post(apiUrl, { query });
    expect(response.data).toMatchObject({
        "data": {
            "createFruitForFruitStorage": {
                "limit": 10,
                "description": "this is lemon",
                "name": "lemon"
            }
        }
    });
});

// Note : 
// If this test fails, it will have an errors object, so in this test, we are checking that if there is an errors object or not.
// If errors object is present, then test will pass.

test('This test will fail, since "lemon" fruit is already created', async () => {
    const query = `
    mutation{
        createFruitForFruitStorage(name: "lemon", description: "this is lemon", limit: 10) {
          limit
          description
          name
        }
      }
  `;

    const response = await axios.post(apiUrl, { query });
    expect(response.data).toHaveProperty("errors");
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