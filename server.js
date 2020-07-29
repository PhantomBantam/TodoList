const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');


mongoose.connect(process.env.DB_CONNECTION_LINK, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{console.log("CONNECTED WITH MONGO");})

const app = express();
const PORT = process.env.PORT || 3000;

//use body-parser functionality
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use cors so that the api can be accessed by foreign domains
app.use(cors());

const toDosRouter = require('./api/routes/toDos');

app.use('/todos', toDosRouter);

app.listen(PORT, ()=>{console.log('SERVER RUNNING AT PORT: ' + PORT)});
