var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World Expressjs');
});

app.listen(8084);
console.log('Server is running on port 8084');
