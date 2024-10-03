const express = require('express'); //Imports Express framework
require('dotenv').config(); //Load variables from .env
const mysql = require('mysql2'); //Import mySQL library
const path = require('path'); //Import path module for handling file paths
const app = express(); //Create an Express application instance
const port = 3000; //Port for localhost

app.use(express.json()); //Middleware to parse JSON request bodies
app.use(express.static('public')); //Looks for static files from the 'public' directory (style.css, planet-data.json, jne..)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); //Log server status

/*
MySQL database connection and error handling for it
*/
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: '22585'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to MySQL Database!');
});

/*
Updates votes to database
*/
app.post('/vote', (req, res) => {
  const { planet } = req.body;
  const query = 'UPDATE votes SET votes = votes + 1 WHERE planet_name = ?';
  connection.query(query, [planet], (error) => {
    if (error) {
      console.error('Error updating vote:', error);
      res.status(500).send('Error submitting vote');
    } else {
      res.send();
    }
  });
});

/*
Prints out votes from database
*/
app.get('/votes', (req, res) => {
  const query = 'SELECT * FROM votes';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching results:', error);
      res.status(500).json({ error: 'Failed to retrieve results' });
    } else {
      res.json(results);
    }
  });
});