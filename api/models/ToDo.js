const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema({
  title: String,
  date  : String,
  description: String,
  finished: Boolean
});

module.exports = mongoose.model('toDo', ToDoSchema);