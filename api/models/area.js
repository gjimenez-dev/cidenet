const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const area = sequelize.define(
    'area', {
        nArea: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cDescription: Sequelize.STRING,
        bActive: Sequelize.TINYINT,
        dRegisterDate: Sequelize.DATE,
        dLastDate: Sequelize.DATE,
        dDeleteDate: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'area'
    }
);

module.exports = area;