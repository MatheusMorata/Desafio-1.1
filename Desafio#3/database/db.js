"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexao = void 0;
var sequelize_1 = require("sequelize");
var conexao = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'desafio3',
});
exports.conexao = conexao;
