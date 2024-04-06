"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface = void 0;
// Importações
var read = require("readline-sync");
var validacao_1 = require("./validacao");
// Objeto 
var validar = new validacao_1.Validacao();
// Classe Interface
var Interface = /** @class */ (function () {
    function Interface() {
    }
    Interface.prototype.menu = function () {
        var moedaOrigem = "";
        var moedaDestino = "";
        try {
            while (true) {
                moedaOrigem = read.question("Moeda origem: ");
                validar.validarLengthCaracteres(moedaOrigem);
                if (moedaOrigem !== "") {
                    moedaDestino = read.question("Moeda destino: ");
                    validar.validarMoedas(moedaOrigem, moedaDestino);
                }
                else {
                    break;
                }
            }
        }
        catch (error) {
            console.log(error.message);
            this.menu(); // Chama novamente o método menu após tratar o erro
        }
    };
    return Interface;
}());
exports.Interface = Interface;
