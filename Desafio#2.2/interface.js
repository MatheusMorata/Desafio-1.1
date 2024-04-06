"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface = void 0;
// Importações 
var read = require("readline-sync");
var validacao_1 = require("./validacao");
// Variáveis
var validar = new validacao_1.Validacao();
var Interface = /** @class */ (function () {
    function Interface() {
    }
    Interface.prototype.menu = function () {
        var moedaOrigem = "";
        var moedaDestino = "";
        while (true) {
            try {
                moedaOrigem = read.question("Moeda origem: ");
                validar.validarLengthCaracteres(moedaOrigem);
            }
            catch (error) {
                console.log(error.message);
            }
            if (moedaOrigem !== "") {
                moedaDestino = read.question("Moeda destino: ");
            }
            else {
                break;
            }
        }
    };
    return Interface;
}());
exports.Interface = Interface;
