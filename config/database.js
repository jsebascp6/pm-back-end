const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pm_backend_db', 'admin', 'holamundo', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
