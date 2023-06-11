import { createTestContext } from './__helpers';

const ctx = createTestContext();

it('ensures that a fruit is found or not', async () => {
  const fruitResult = await ctx.client.request(`
    mutation {
      findFruit(name: "askjdaskjdksajdsa") {
        name
        description
        limit
      }
    }
  `);

  expect(fruitResult).toMatchInlineSnapshot(`
  {
    "data": {
      "findFruit": null
    }
  }
`);
},90000);
