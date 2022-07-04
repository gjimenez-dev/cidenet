'use strict'

const sequelize = require('../db/db_sequelize');
const employee = require('../models/employee');
const country = require('../models/country');
const area = require('../models/area');
const typeid = require('../models/typeid');

// ************************
// Metodo que obtiene todos los empleados
// ************************
async function getEmployeeAll (req) {

    try {
        const data = await employee.findAll({
            include: [
                {
                    model: country,
                    attributes: [
                        'nCountry',
                        'cDescription'
                    ],
                    where: {
                        bActive: 1
                    },
                    required: false
                },
                {
                    model: area,
                    attributes: [
                        'nArea',
                        'cDescription'
                    ],
                    where: {
                        bActive: 1
                    },
                    required: false
                },
                {
                    model: typeid,
                    attributes: [
                        'nTypeID',
                        'cDescription'
                    ],
                    where: {
                        bActive: 1
                    },
                    required: false
                }
            ],
            where: { bActive: 1 },
            order: [
                ['cFirstName', 'ASC']
            ]
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

/**
 * Método para consultar un empleado activo
 * @param id 
 * @returns 
 */
async function getEmployeeById (req) {

    try {
        const data = await employee.findOne({
            where: {
                nTypeID: req.params.type,
                cNumberID: req.params.numberid,
                bActive: 1
            }
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

/**
 * Método para crear un empleado
 * @param {*} req 
 * @returns 
 */
async function postEmployeeCreate (req) {

    let data;

    try {
        const result = await sequelize.transaction(async (t) => { // se crea transacción para el encabezado y detalle

            const {
                cFirstName,
                cOthersName,
                cSurname,
                cSecondSurname,
                nCountry,
                nTypeID,
                cNumberID,
                cEmail,
                dAdmissionDate,
                nArea
            } = req.body;

            data = await employee.create({
                cFirstName,
                cOthersName,
                cSurname,
                cSecondSurname,
                nCountry,
                nTypeID,
                cNumberID,
                cEmail,
                dAdmissionDate: new Date(dAdmissionDate),
                nArea,
                dRegisterDate: new Date()
            }, { transaction: t });
        });

        if (!data) {
            return {
                status: 400,
                error: '',
                data: {},
            };
        } else {
            return {
                status: 200,
                error: '',
                data: data
            };
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

/**
 * Método para actualizar los datos de un empleado
 * @param {*} req 
 * @returns 
 */
 async function putEmployeeUpdateById (req) {

    let data;

    try {

        const {
            nId,
            cFirstName,
            cOthersName,
            cSurname,
            cSecondSurname,
            nCountry,
            nTypeID,
            cNumberID,
            cEmail,
            dAdmissionDate,
            nArea
        } = req.body;

        data = await reg_productosproductor.update({
            cFirstName: cFirstName,
            cOthersName: cOthersName,
            cSurname: cSurname,
            cSecondSurname: cSecondSurname,
            nCountry: nCountry,
            nTypeID: nTypeID,
            cNumberID: cNumberID,
            cEmail: cEmail,
            dAdmissionDate: dAdmissionDate,
            nArea: nArea,
            dLastDate: new Date()
        },
        { where: { nId: nId, bActive: 1 } });

        if (!data) {
            return {
                status: 400,
                error: '',
                data: {},
            };
        } else {
            return {
                status: 200,
                error: '',
                data: data
            };
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

/**
 * Método para eliminar de forma lógica un empleado colocando el campo bActive en 0
 * @param id
 * @returns 
 */
async function deleteEmployeeById (req) {

    try {
        data = await reg_productosproductor.update({
            bActvo: 0,
            dDeleteDate: new Date()
        },
        { where: { nId: req.params.id, bActive: 1 } });

        if (!data) {
            return {
                status: 400,
                error: '',
                data: {},
            };
        } else {
            return {
                status: 200,
                error: '',
                data: data
            };
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
    getEmployeeAll,
    getEmployeeById,
    postEmployeeCreate,
    putEmployeeUpdateById,
    deleteEmployeeById
}