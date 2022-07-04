'use strict'

var app = require('./app');
var cors = require('cors');
app.use(cors());
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Servidor API funcionando en puerto ' + port);
});