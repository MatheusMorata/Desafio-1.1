"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validacao = void 0;
var Validacao = /** @class */ (function () {
    function Validacao() {
    }
    // Moeda de origem e de destino devem ter exatamente 3 caracteres.
    Validacao.prototype.validarLengthCaracteres = function (str) {
        if (str.length != 3 && str.length != 0) {
            throw new Error("ERRO: A string deve ter exatos 3 caracteres. ");
        }
    };
    // Moeda origem ≠ moeda destino.
    Validacao.prototype.validarMoedas = function (str1, str2) {
        if (str1 == str2) {
            throw new Error("ERRO: Não é possível fazer conversão da mesma moeda. ");
        }
    };
    // O valor deve ser númerico.
    Validacao.prototype.validarValor = function (valor) {
        // Verifica se o valor não é um número ou se não é um valor de ponto flutuante
        if (isNaN(valor) || typeof valor !== 'number') {
            throw new Error('ERRO: Valor não é um número de ponto flutuante. ');
        }
        else if (valor <= 0) {
            throw new Error('ERRO: Valor negativo ou igual a zero. ');
        }
    };
    return Validacao;
}());
exports.Validacao = Validacao;
