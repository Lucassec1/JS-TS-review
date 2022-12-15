const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const database = require('./db/connection');
const bodyParser = require('body-parser');
const { dirname } = require('path');

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The express is running at the port ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

// handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

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
    res.render('index');
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));