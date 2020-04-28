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

const ticketsRouter = require('./src/routes/ticket_routes');

app.use('/tickets', ticketsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})


