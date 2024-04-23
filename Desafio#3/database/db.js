"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = void 0;
var sequelize_1 = require("sequelize");
var sql = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'desafio3',
});
exports.sql = sql;
sql.authenticate();
