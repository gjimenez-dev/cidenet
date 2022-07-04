'use strict'

const country = require('../models/country');

// ************************
// Metodo que obtiene todos los paises
// ************************
async function getCountryAll (req) {

    try {
        const data = await country.findAll({
            attributes: [
                'nCountry',
                'cDescription'
            ],
            where: { bActive: 1 }
        });

        return {
            status: 200,
            error: '',
            data
        }

    } catch (err) {
        console.log(err);
        return {
            status: 500,
            error: err,
            data: []
        };
    }
}

module.exports = {
    getCountryAll,
}