'use strict';

var express = require('express');
var controller = require('../controllers/area');
var api = express.Router();

api.get('/', controller.getAreaAll);

module.exports = api;