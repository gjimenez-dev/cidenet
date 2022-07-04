'use strict'

const services = require('../services/country');

// ************************
// Metodo que obtiene tipos datos
// ************************
async function getCountryAll(req, res) {

    let resultado = await services.getCountryAll(req);
    res.status(resultado.status).send(resultado.data);

}

module.exports = {
    getCountryAll
}