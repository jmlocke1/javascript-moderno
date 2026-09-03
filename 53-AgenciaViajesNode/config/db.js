import Sequelize from 'sequelize';
import config from './configLocal.js';
const { databaseName, databaseUser, databasePassword, host, port } = config;

const db = new Sequelize(databaseName, databaseUser, databasePassword, {
    host,
    port,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export default db;