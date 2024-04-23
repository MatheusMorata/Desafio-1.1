import { Sequelize } from 'sequelize';

const conexao = new Sequelize('Desafio3','postgres','123',  {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  }
);

export default conexao;