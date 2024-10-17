
const { Client } = require('pg');

const client = new Client({
  user: 'ms',
  host: 'localhost',
  database: 'mrb',
  password: '1234',
  port: 5432,
});

module.exports = client;
