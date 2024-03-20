const Paciente = require('./paciente');

class Agendamento {
    #consultas

    constructor() {
        this.#consultas = [];
    }

    agendarConsulta(cpf, hora, minuto) {
        const paciente = Paciente.getPorCPF(cpf); 

        if (!paciente) {
            throw new Error("CPF não encontrado no cadastro.");
        }


        this.#consultas.push({
            cpf: cpf,
            hora: hora,
            minuto: minuto
        });

        console.log("Consulta agendada com sucesso!");
    }
}