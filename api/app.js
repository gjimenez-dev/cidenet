'use strict'

const express = require('express');
const bodyParser = require('body-parser');

// agregar archivos para las tareas programadas
var app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());

// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Request-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
});

// Empleados
var employee = require("./routes/employee");

// Paises
var country = require("./routes/country");

// Áreas
var area = require("./routes/area");

// Tipos de Identificación
var type_id = require("./routes/type_id");

// rutas base
app.use("/api/employee", employee);
app.use("/api/area", area);
app.use("/api/country", country);
app.use("/api/type-id", type_id);

module.exports = app;