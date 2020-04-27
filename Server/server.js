const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

require('./src/routes')(app, {});

app.listen(port, () => {
    console.log("We are running on port: " + port);
})