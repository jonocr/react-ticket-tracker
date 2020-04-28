const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;

console.log("Env variable: " + uri);

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

// MongoClient.connect(db.url, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     }, (err,  database) => {
//         // const db = client.db;
//     if (err) return console.log(err);

//     require('./src/routes')(app, database);
//     app.listen(port, () => {
//         console.log(`Server is running on port: ${port}`);
//     })
// });