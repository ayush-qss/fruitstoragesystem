const axios = require('axios');

const apiUrl = 'http://localhost:4000/'; 

test('returns hello message', async () => {
    const query = `
    mutation {
          findFruit(name: "") {
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
                    "name": "apple",
                    "description": "askdjkasjdlkajsdlkaj",
                    "limit": 1
                }
            ]
        }
    });
});
