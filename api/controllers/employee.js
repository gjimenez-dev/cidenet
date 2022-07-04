'use strict'

const services = require('../services/employee');

// ************************
// Servicio que obtiene todos los empleados activos
// ************************
async function getEmployeeAll(req, res) {

    let resultado = await services.getEmployeeAll(req);
    res.status(resultado.status).send(resultado.data);

}

// ************************
// Servicio que obtiene un empleado activo
// ************************
async function getEmployeeByID(req, res) {

    let resultado = await services.getEmployeeById(req);
    res.status(resultado.status).send(resultado.data);

}

// ************************
// Servicio que crearun nuevo empleado
// ************************
async function postEmployeeCreate(req, res) {

    let resultado = await services.postEmployeeCreate(req);
    res.status(resultado.status).send(resultado.data);

}

// ************************
// Servicio que actualiza la información de un empleado
// ************************
async function putEmployeeUpdate(req, res) {

    let resultado = await services.putEmployeeUpdateById(req);
    res.status(resultado.status).send(resultado.data);

}

// ************************
// Servicio que elimina un empleado
// ************************
async function deleteEmployee(req, res) {

    let resultado = await services.deleteEmployeeById(req);
    res.status(resultado.status).send(resultado.data);

}

module.exports = {
    getEmployeeAll,
    getEmployeeByID,
    postEmployeeCreate,
    putEmployeeUpdate,
    deleteEmployee
}