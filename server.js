const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;


const toDosRouter = require('./api/routes/toDos');

app.use('/todos', toDosRouter);

app.listen(PORT, ()=>{console.log('SERVER RUNNING AT PORT: ' + PORT)});

