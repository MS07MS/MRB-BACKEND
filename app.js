const express = require('express');
const client = require('./Configurations/dbConfiguration')

const app = express();

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected to PostgreSQL database!");

    const query = 'SELECT * FROM userregistration_schema.user_reg';

  client.query(query, (err, res) => {
    if (err) {
      console.error('Error executing query', err.stack);
    } else {
      console.log('Sample Data:', res.rows);
    }
    client.end();
  });
  });



const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, World! This is my Node.js app running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
