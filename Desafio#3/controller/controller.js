"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarPaciente = void 0;
var Paciente_1 = require("../model/Paciente");
var read = require("readline-sync");
function cadastrarPaciente() {
    var cpf = read.question('Digite seu CPF: ');
    var nome = read.question('Digite o nome: ');
    var dataNascimento = read.question('Digite a data de nascimento: (DD/MM/AAAA)');
    (0, Paciente_1.adicionarPaciente)(cpf, nome, dataNascimento);
}
exports.cadastrarPaciente = cadastrarPaciente;
