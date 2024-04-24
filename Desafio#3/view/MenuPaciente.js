"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuPaciente = void 0;
var read = require("readline-sync");
var controller_1 = require("../controller/controller");
function menuPaciente() {
    var ativo = 0;
    while (ativo != 5) {
        console.log("Menu do cadastro de Pacientes");
        console.log("1-Cadastrar novo paciente");
        console.log("2-Excluir paciente");
        console.log("3-Listar pacientes (ordenado por CPF)");
        console.log("4-Listar pacientes (ordenado por nome)");
        console.log("5-Voltar p/ menu principal");
        ativo = parseInt(read.question(''));
        console.clear();
        if (ativo == 1) {
            (0, controller_1.cadastrarPaciente)();
        }
        else if (ativo == 2) {
            console.clear();
        }
        else if (ativo == 3) {
            console.clear();
        }
        else if (ativo == 4) {
            console.clear();
        }
        else if (ativo == 5) {
            console.clear();
        }
        else {
            console.log("Opcao invalida. ");
        }
    }
}
exports.menuPaciente = menuPaciente;
