const Paciente = require('./paciente');

class Agenda {
    #consultas

    constructor() {
        this.#consultas = [];
    }

    agendarConsulta(cpf, hora, minuto) {
        this.#consultas.push({
            cpf: cpf,
            hora: hora,
            minuto: minuto
        });
    }

}
module.exports = Agenda;