import {Sequelize} from "sequelize";

const sql = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'desafio3',
});

sql.authenticate();

export { sql };