var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Task = new Schema({
  name: String,
  age: Number
});

var Task = mongoose.model('User',Task)

module.exports = Task;
