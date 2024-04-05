"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface = void 0;
var read = require("readline-sync");
var Interface = /** @class */ (function () {
    function Interface() {
    }
    Interface.prototype.menu = function () {
        var moedaOrigem = "";
        var moedaDestino = "";
        while (true) {
            moedaOrigem = read.question("Moeda origem: ");
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
