const express = require('express');
const app = express();
const database = require('./db/connection');

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The express is running at the port ${PORT}`);
});

// database connection
database
    .authenticate()
    .then(() => {
        console.log('Connected to the database successfully')
    })
    .catch(error => {
        console.log('Error in connection', error);
    });

// Routes
app.get('/', (req, res) => {
    res.send('Is running');
});