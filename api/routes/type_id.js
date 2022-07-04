'use strict';

var express = require('express');
var controller = require('../controllers/type_id');
var api = express.Router();

api.get('/', controller.getTypeAll);

module.exports = api;