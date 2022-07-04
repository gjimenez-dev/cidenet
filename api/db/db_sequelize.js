const Sequelize = require('sequelize');

// Datos de configuración de la BD
const db = 'employmentdb';
const user = 'root';
const pwd = 'mysql12345'; 
const host = 'localhost';
const port = '3306';

const sequelize = new Sequelize(db, user, pwd, {
    host: host,
    port: port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 2,
        acquire: 15000,
        idle: 10000,
    },
    // logging: false,
    define: {
        timestamps: false,
    }
});

sequelize.authenticate()
    .then(() => {
        console.log(`Connected to db : ${host} : ${port}`);
    })
    .catch(err => {
        console.log('ERROR: Can not connect to db: ' + err)
    });

module.exports = sequelize;