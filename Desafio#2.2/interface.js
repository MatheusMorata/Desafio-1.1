"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface = void 0;
// Importações 
var read = require("readline-sync");
var validacao_1 = require("./validacao");
// Objeto da classe validação
var validar = new validacao_1.Validacao();
var Interface = /** @class */ (function () {
    function Interface() {
    }
    Interface.prototype.menu = function () {
        // Variáveis
        var moedaOrigem = "";
        var moedaDestino = "";
        try {
            while (true) {
                moedaOrigem = read.question("Moeda origem: ");
                validar.validarLengthCaracteres(moedaOrigem);
                if (moedaOrigem !== "") {
                    moedaDestino = read.question("Moeda destino: ");
                }
                else {
                    break;
                }
                validar.validarMoedas(moedaOrigem, moedaDestino);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };
    return Interface;
}());
exports.Interface = Interface;
