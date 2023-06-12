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

test('This will pass, since the lemon is having limit 10 , which is less than 5.', async () => {
    const query = `
    mutation{
        storeFruitToFruitStorage(name: "lemon", amount: 5) {
          name
          amount
        }
      }
`;

    const response = await axios.post(apiUrl, { query });
    expect(response.data).toMatchObject({
        "data": {
            "storeFruitToFruitStorage": {
                "name": "lemon",
                "amount": 5
            }
        }
    });
});

// Note : 
// If this test fails, it will have an errors object, so in this test, we are checking that if there is an errors object or not.
// If errors object is present, then test will pass.

test('This test case, will fail, since lemon is having limit 10, and we are proving amount 11.', async () => {
    const query = `
    mutation{
        storeFruitToFruitStorage(name: "lemon", amount: 11) {
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

    const query2 = `
    mutation{
        removeFruitFromFruitStorage(name: "lemon", amount: 5) {
          name
          amount
        }
      }
    `;
    await axios.post(apiUrl, { query: query2 });

});