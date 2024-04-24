"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuPrincipal = void 0;
var read = require("readline-sync");
var MenuPaciente_1 = require("./MenuPaciente");
var MenuAgenda_1 = require("./MenuAgenda");
function menuPrincipal() {
    var ativo = 0;
    while (ativo != 3) {
        console.log("Menu Principal ");
        console.log("1-Cadastro de pacientes");
        console.log("2-Agenda");
        console.log("3-Fim");
        ativo = parseInt(read.question(''));
        console.clear();
        if (ativo == 1) {
            (0, MenuPaciente_1.menuPaciente)();
        }
        else if (ativo == 2) {
            (0, MenuAgenda_1.menuAgenda)();
        }
        else if (ativo == 3) {
            console.log("Encerrando");
        }
        else {
            console.log("Opcao invalida. ");
        }
    }
}
exports.menuPrincipal = menuPrincipal;
