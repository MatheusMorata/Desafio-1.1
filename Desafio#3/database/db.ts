import { Sequelize } from "sequelize";

const conexao = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'desafio3',
});

export { conexao };