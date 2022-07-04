'use strict'

const typeid = require('../models/typeid');

// ************************
// Metodo que obtiene todas los tipos de identificación
// ************************
async function getTypeAll (req) {

    try {
        const data = await typeid.findAll({
            attributes: [
                'nTypeID',
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
    getTypeAll,
}