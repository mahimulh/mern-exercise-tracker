const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

/*
const express = require('express'); //web framework
const cors = require('cors'); //cross-origin resource sharing allows AJAX requests to skip the Same-origin policy and access resources from remote hosts. The cors package provides an Express middleware that can that can enable CORS with different options.
const mongoose = require ('mongoose'); 

require ('dotenv').config(); //dotenv loads environment variables from a .env file into process.env. Instead of setting environment variables on our development machine, they can be stored in a file.

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
    
);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

*/