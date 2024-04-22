import { Sequelize } from 'sequelize';

const sql = new Sequelize('', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432 
});

export {sql};