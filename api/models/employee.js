const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');
const area = require('./area');
const country = require('./country');
const typeid = require('./typeid');

const employee = sequelize.define(
    'employee', {
        nId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cFirstName: Sequelize.STRING,
        cOthersName: Sequelize.STRING,
        cSurname: Sequelize.STRING,
        cSecondSurname: Sequelize.STRING,
        nCountry: Sequelize.INTEGER,
        nTypeID: Sequelize.INTEGER,
        cNumberID: Sequelize.STRING,
        cEmail: Sequelize.STRING,
        dAdmissionDate: Sequelize.DATE,
        nArea: Sequelize.INTEGER,
        bStatus: Sequelize.TINYINT,
        bActive: Sequelize.TINYINT,
        dRegisterDate: Sequelize.DATE,
        dLastDate: Sequelize.DATE,
        dDeleteDate: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'employee'
    }
);

employee.belongsTo(area, {
    foreignKey: 'nArea'
});
area.hasMany(employee,
    {foreignKey: 'nArea'}
);

employee.belongsTo(country, {
    foreignKey: 'nCountry'
});
country.hasMany(employee,
    {foreignKey: 'nCountry'}
);

employee.belongsTo(typeid, {
    foreignKey: 'nTypeID'
});
typeid.hasMany(employee,
    {foreignKey: 'nTypeID'}
);

module.exports = employee;