"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validacao = void 0;
var Validacao = /** @class */ (function () {
    function Validacao() {
    }
    Validacao.prototype.validarLengthCaracteres = function (str) {
        if (str.length != 3) {
            throw new Error("ERRO: A string deve ter exatos 3 caracteres. ");
        }
    };
    Validacao.prototype.validarMoedas = function (str1, str2) {
        if (str1 == str2) {
            throw new Error("ERRO: Não é possível fazer conversão da mesma moeda");
        }
    };
    return Validacao;
}());
exports.Validacao = Validacao;
