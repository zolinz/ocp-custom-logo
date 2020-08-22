var path = require('path');
var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/start', function (req, res) {
    res.sendFile(path.join( __dirname + '/public/MyStartpage.html'));
});

app.get('/mystyle', function (req, res) {
    res.sendFile(path.join( __dirname + '/public/css/mylogo.css'));
});

app.get('/ocp-custom', function (req, res) {
    res.sendFile(path.join( __dirname + '/public/css/my-ocp-logo.css'));
});


app.get('/myimage', function (req, res) {
    res.sendFile(path.join( __dirname + '/public/css/Joker.png'));
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});