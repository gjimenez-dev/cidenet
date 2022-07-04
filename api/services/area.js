'use strict'

const area = require('../models/area');

// ************************
// Metodo que obtiene todas los areas administrativas
// ************************
async function getAreaAll (req) {

    try {
        const data = await area.findAll({
            attributes: [
                'nArea',
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
    getAreaAll,
}