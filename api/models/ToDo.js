const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema({
  title: String,
  date  : String,
  description: String,
  finished: String
});

module.exports = mongoose.model('toDo', ToDoSchema);