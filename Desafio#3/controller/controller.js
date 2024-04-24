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
exports.listarAgenda = exports.cancelarConsulta = exports.agendarConsulta = exports.printCPF = exports.printNome = exports.deletar = exports.cadastrar = void 0;
var Paciente_1 = require("../model/Paciente");
var Agenda_1 = require("../model/Agenda");
var read = require("readline-sync");
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) {
        return false;
    }
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }
    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var resto = soma % 11;
    var digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
        return false;
    }
    soma = 0;
    for (var i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    var digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
    if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
        return false;
    }
    return true;
}
function cadastrar() {
    // Solicita os dados do paciente
    var cpf = read.question('Digite seu CPF: ');
    var nome = read.question('Digite o nome: ');
    var dataNascimento = read.question('Digite a data de nascimento (DD/MM/AAAA): ');
    // Verifica se o CPF é válido
    if (!validarCPF(cpf)) {
        console.error('CPF inválido. Por favor, insira um CPF válido.');
        return;
    }
    // Verifica se o nome possui pelo menos 5 caracteres
    if (nome.length < 5) {
        console.error('O nome deve ter pelo menos 5 caracteres.');
        return;
    }
    // Verifica se a data de nascimento está no formato correto
    var dataNascimentoRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dataNascimento.match(dataNascimentoRegex)) {
        console.error('Formato de data de nascimento inválido. Use o formato DD/MM/AAAA.');
        return;
    }
    // Adiciona o paciente apenas se todas as verificações passarem
    (0, Paciente_1.adicionarPaciente)(cpf, nome, dataNascimento);
}
exports.cadastrar = cadastrar;
function deletar() {
    var id = parseInt(read.question('Digite o id: '));
    (0, Paciente_1.delPaciente)(id);
}
exports.deletar = deletar;
function printNome() {
    return __awaiter(this, void 0, void 0, function () {
        var pacientes, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, Paciente_1.listarPorNome)()];
                case 1:
                    pacientes = _a.sent();
                    console.log("Pacientes listados por nome:");
                    pacientes.forEach(function (paciente) {
                        console.log("CPF: ", paciente.cpf, "\nNome: ", paciente.nome, "\nData Nascimento: ", paciente.dataNascimento);
                    });
                    return [3 /*break*/, 3];
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
function agendarConsulta() {
    return __awaiter(this, void 0, void 0, function () {
        var idPaciente, dataConsulta, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    idPaciente = parseInt(read.question('Digite o ID do paciente para agendar a consulta: '));
                    dataConsulta = read.question('Digite a data da consulta (DD/MM/AAAA): ');
                    return [4 /*yield*/, Agenda_1.Agendamento.create({
                            inicio: dataConsulta,
                            fim: dataConsulta,
                            id_paciente: idPaciente,
                        })];
                case 1:
                    _a.sent();
                    console.log("Consulta agendada para o paciente com ID ".concat(idPaciente, " na data ").concat(dataConsulta));
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error('Erro ao agendar consulta:', error_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.agendarConsulta = agendarConsulta;
function cancelarConsulta() {
    return __awaiter(this, void 0, void 0, function () {
        var idAgendamento, agendamento, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    idAgendamento = parseInt(read.question('Digite o ID do agendamento para cancelar: '));
                    return [4 /*yield*/, Agenda_1.Agendamento.findByPk(idAgendamento)];
                case 1:
                    agendamento = _a.sent();
                    // Verifica se o agendamento existe
                    if (!agendamento) {
                        console.log('Agendamento não encontrado.');
                        return [2 /*return*/];
                    }
                    // Remove o agendamento do banco de dados
                    return [4 /*yield*/, agendamento.destroy()];
                case 2:
                    // Remove o agendamento do banco de dados
                    _a.sent();
                    console.log("Agendamento cancelado com sucesso.");
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error('Erro ao cancelar agendamento:', error_4.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.cancelarConsulta = cancelarConsulta;
function listarAgenda() {
    return __awaiter(this, void 0, void 0, function () {
        var agenda, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Agenda_1.Agendamento.findAll()];
                case 1:
                    agenda = _a.sent();
                    console.log("Agenda de consultas:");
                    agenda.forEach(function (item) {
                        console.log("ID: ".concat(item.id, ", In\u00EDcio: ").concat(item.inicio, ", Fim: ").concat(item.fim, ", ID do Paciente: ").concat(item.id_paciente));
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error('Erro ao listar agenda:', error_5.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.listarAgenda = listarAgenda;
