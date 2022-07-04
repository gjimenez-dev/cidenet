'use strict'

const services = require('../services/type_id');

// ************************
// Metodo que obtiene tipos datos
// ************************
async function getTypeAll(req, res) {

    let resultado = await services.getTypeAll(req);
    res.status(resultado.status).send(resultado.data);

}

module.exports = {
    getTypeAll
}