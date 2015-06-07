var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var bizSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  company: String,
  position: String,
  phone: String,
  url: String,
  address: String,
  details: String,
  firstTimeUploaded: Boolean,
  date: Date,
  timesUploaded:Number
});


module.exports = mongoose.model('BusinessCard', bizSchema);
