var _ = require('lodash');
var async = require('async');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/BusinessCard');
var secrets = require('../config/secrets');


/**
 * GET /
 * Tracker page.
 */
exports.index = function(req, res) {
  res.render('tracker', {
    title: 'Tracker'
  });
};