var mongoose = require('mongoose');

module.exports = mongoose.model('Objectdata', {
  name:         String,
  time:         Date,
  temperature:  Number,
  humidity:     Number,
  sound:        Number,
  light:        Number,
  movement :    Number
});