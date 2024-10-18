const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const client = require('./Configurations/dbConfiguration');
const userRoutes =  require('./Routes/userRoutes')



const app = express();
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,POST,PUT,DELETE',  
  credentials: true                
}));
app.use(bodyParser.json());

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
    // client.end();
  });
  });

  app.use('/api/users', userRoutes);



const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, World! This is my Node.js app running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
