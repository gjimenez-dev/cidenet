'use strict';

var express = require('express');
var controller = require('../controllers/employee');
var api = express.Router();

api.get('/', controller.getEmployeeAll);
api.get('/:type/:numberid', controller.getEmployeeByID);
api.post('/', controller.postEmployeeCreate);
api.put('/', controller.putEmployeeUpdate);
api.delete('/:id', controller.deleteEmployee);
//api.get('/:email/email', controller.getSearchEmail);

module.exports = api;