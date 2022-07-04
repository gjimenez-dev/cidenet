'use strict'

const services = require('../services/area');

// ************************
// Metodo que obtiene tipos datos
// ************************
async function getAreaAll(req, res) {

    let resultado = await services.getAreaAll(req);
    res.status(resultado.status).send(resultado.data);

}

module.exports = {
    getAreaAll
}