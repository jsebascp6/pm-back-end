import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('pm_backend_db', 'admin', 'holamundo', {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;
