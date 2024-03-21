const Paciente = require('./paciente');

class Agenda {
    #consultas

    constructor() {
        this.#consultas = [];
    }

    agendarConsulta(cpf, dataConsulta, horaInicial, horaFinal) {
        // Verificando se a hora inicial e a hora final estão no formato HH:MM
        const regexHora = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!regexHora.test(horaInicial) || !regexHora.test(horaFinal)) {
            throw new Error("Hora inicial e/ou hora final estão em formato inválido. Use o formato HH:MM.");
        }

        // Verificando se a data está no formato DD/MM/AAAA
        const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (!regexData.test(dataConsulta)) {
            throw new Error("Data da consulta está em formato inválido. Use o formato DD/MM/AAAA.");
        }

        // Separando as horas e os minutos
        const [horaIni, minutoIni] = horaInicial.split(":");
        const [horaFim, minutoFim] = horaFinal.split(":");

        // Convertendo para números inteiros
        const horaIniInt = parseInt(horaIni);
        const minutoIniInt = parseInt(minutoIni);
        const horaFimInt = parseInt(horaFim);
        const minutoFimInt = parseInt(minutoFim);

        // Verificando se as horas estão dentro do intervalo permitido (8h - 19h)
        if (horaIniInt < 8 || horaIniInt > 19 || horaFimInt < 8 || horaFimInt > 19) {
            throw new Error("Horário(s) fora do intervalo permitido (8h - 19h).");
        }

        // Verificando se a hora final é maior que a hora inicial
        if (horaFimInt < horaIniInt || (horaFimInt === horaIniInt && minutoFimInt <= minutoIniInt)) {
            throw new Error("A hora final deve ser maior que a hora inicial.");
        }

        // Adicionando a consulta à lista de consultas
        this.#consultas.push({
            cpf: cpf,
            dataConsulta: dataConsulta,
            horaInicial: horaInicial,
            horaFinal: horaFinal
        });
    }

    ListaAgenda() {
        console.log("Consultas Agendadas:");
        this.#consultas.forEach((consulta, index) => {
            console.log(`Consulta ${index + 1}:`);
            console.log(`CPF: ${consulta.cpf}`);
            console.log(`Data: ${consulta.dataConsulta}`);
            console.log(`Hora Inicial: ${consulta.horaInicial}`);
            console.log(`Hora Final: ${consulta.horaFinal}`);
            console.log("-----------------------");
        });
    }

    excluirConsulta(cpf, dataConsulta, horaInicial) {
        // Encontrar o índice da consulta a ser excluída
        const index = this.#consultas.findIndex(consulta => consulta.cpf === cpf && consulta.dataConsulta === dataConsulta && consulta.horaInicial === horaInicial);

        // Verificar se a consulta foi encontrada
        if (index !== -1) {
            // Remover a consulta da lista de consultas
            this.#consultas.splice(index, 1);
            console.log(`Consulta com CPF ${cpf}, data ${dataConsulta} e horário inicial ${horaInicial} excluída com sucesso.`);
        } else {
            console.log(`Consulta com CPF ${cpf}, data ${dataConsulta} e horário inicial ${horaInicial} não encontrada.`);
        }
    }
}
module.exports = Agenda;