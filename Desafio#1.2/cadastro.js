const Paciente = require('./paciente');

class Cadastro {
    constructor() {
        this.pacientes = [];
    }

    adicionar(paciente) {
        if (!(paciente instanceof Paciente)) {
            throw new Error('O parâmetro deve ser um objeto do tipo Paciente.');
        }
        this.pacientes.push(paciente);
    }

    excluir(cpf) {
        const index = this.pacientes.findIndex(paciente => paciente.cpf === cpf);
        if (index !== -1) {
            this.pacientes.splice(index, 1);
            console.log(`Paciente com CPF ${cpf} excluído com sucesso.`);
        } else {
            console.log(`Paciente com CPF ${cpf} não encontrado.`);
        }
    }

    printCPF() {
        const pacientesOrdenados = this.pacientes.slice().sort((a, b) => a.cpf.localeCompare(b.cpf));
        pacientesOrdenados.forEach(paciente => {
            console.log(`CPF: ${paciente.cpf} \nNome: ${paciente.nome} \nData de Nascimento: ${paciente.dataNascimento}`);
        });
    }

    printNome() {
        const pacientesOrdenados = this.pacientes.slice().sort((a, b) => a.nome.localeCompare(b.nome));
        pacientesOrdenados.forEach(paciente => {
            console.log(`Nome: ${paciente.nome}, CPF: ${paciente.cpf}, Data de Nascimento: ${paciente.dataNascimento}`);
        });
    }
}
module.exports = Paciente;