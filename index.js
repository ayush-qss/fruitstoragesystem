const express = require('express');
const app = express();
const connect = require('./src/connect');
const { server } = require('./server');

app.use(express.json());

const start = async () => {
  try {
    const { url } = await server.listen();
    await connect();
    console.log('Connected to DB');
    console.log(`🚀 Server ready at ${url}`);
  } catch (err) {
    console.log(err);
  }
};

start();
