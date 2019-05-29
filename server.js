const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    console.log('hit route "ping"');
    return res.send('pong');
});

app.get('/', function (req, res) {
    console.log('serving index.html');
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, (req, res) => {
    console.log( `server listening on port: ${port}`);
});