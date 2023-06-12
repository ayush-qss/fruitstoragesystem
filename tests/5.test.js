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

test('This will pass, since the lemon is present and its amount is 5.', async () => {
    const query = `
    mutation{
        removeFruitFromFruitStorage(name: "lemon", amount: 5) {
          name
          amount
        }
      }      
`;

    const response = await axios.post(apiUrl, { query });
    expect(response.data).toMatchObject({
        "data": {
            "removeFruitFromFruitStorage": {
                "name": null,
                "amount": null
            }
        }
    });
});

// Note : 
// If this test fails, it will have an errors object, so in this test, we are checking that if there is an errors object or not.
// If errors object is present, then test will pass.

test('This test case, will fail, since lemon is having amount 6, and we are providing amount 6.', async () => {
    const query = `
    mutation{
        removeFruitFromFruitStorage(name: "lemon", amount: 6) {
          name
          amount
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