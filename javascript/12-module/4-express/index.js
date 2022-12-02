let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send('first route with express');
});

app.listen(3000, function() {
    console.log('the application is running on the port 3000');
});