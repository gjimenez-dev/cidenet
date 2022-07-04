'use strict';

var express = require('express');
var controller = require('../controllers/country');
var api = express.Router();

api.get('/', controller.getCountryAll);

module.exports = api;