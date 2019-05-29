const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));


const {variations} = require('./server-data.js');

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


app.get('/api', function (req, res) {
    let index = getRandom(0, variations.length);
    console.log('rolling dice with value ', index);
    return res.send(variations[index]);
});

app.get('/', function (req, res) {
    console.log('serving index.html');
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, (req, res) => {
    console.log( `server listening on port: ${port}`);
});