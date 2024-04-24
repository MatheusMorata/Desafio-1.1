"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCPF = exports.teste = exports.printNome = exports.deletar = exports.cadastrar = void 0;
var Paciente_1 = require("../model/Paciente");
var read = require("readline-sync");
function cadastrar() {
    var cpf = read.question('Digite seu CPF: ');
    var nome = read.question('Digite o nome: ');
    var dataNascimento = read.question('Digite a data de nascimento: (DD/MM/AAAA)');
    (0, Paciente_1.adicionarPaciente)(cpf, nome, dataNascimento);
}
exports.cadastrar = cadastrar;
function deletar() {
    var id = parseInt(read.question('Digite o id: '));
    (0, Paciente_1.delPaciente)(id);
}
exports.deletar = deletar;
// Função para imprimir os pacientes listados por nome e retorná-los em um array de objetos
function printNome() {
    return __awaiter(this, void 0, void 0, function () {
        var pacientes, pacientesArray_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, Paciente_1.listarPorNome)()];
                case 1:
                    pacientes = _a.sent();
                    console.log("Pacientes listados por nome:");
                    pacientesArray_1 = [];
                    pacientes.forEach(function (paciente) {
                        console.log("Nome: ".concat(paciente.nome, ", CPF: ").concat(paciente.cpf, ", Data de Nascimento: ").concat(paciente.dataNascimento));
                        pacientesArray_1.push({ cpf: paciente.cpf, nome: paciente.nome, dataNascimento: paciente.dataNascimento });
                    });
                    return [2 /*return*/, pacientesArray_1];
                case 2:
                    error_1 = _a.sent();
                    console.error('Erro ao listar pacientes por nome:', error_1.message);
                    return [2 /*return*/, []]; // Retorna um array vazio em caso de erro
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.printNome = printNome;
function teste(pacientesArray) {
    console.log("Dados dos pacientes:");
    pacientesArray.forEach(function (paciente) {
        console.log("Nome: ".concat(paciente.nome, ", CPF: ").concat(paciente.cpf, ", Data de Nascimento: ").concat(paciente.dataNascimento));
    });
}
exports.teste = teste;
function printCPF() {
    return __awaiter(this, void 0, void 0, function () {
        var pacientes, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, Paciente_1.listarPorCPF)()];
                case 1:
                    pacientes = _a.sent();
                    console.log("Pacientes listados por CPF:");
                    pacientes.forEach(function (paciente) {
                        console.log("CPF: ".concat(paciente.cpf, ", Nome: ").concat(paciente.nome, ", Data de Nascimento: ").concat(paciente.dataNascimento));
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Erro ao listar pacientes por CPF:', error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.printCPF = printCPF;
