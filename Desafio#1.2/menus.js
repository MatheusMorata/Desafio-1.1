const Paciente = require('./paciente');
const read = require('readline-sync');

class Menus {

    menuPrincipal() {
        console.log("Menu Principal ");
        console.log("1-Cadastro de pacientes");
        console.log("2-Agenda");
        console.log("3-Fim");
    }

    menuPaciente(){
        console.log("Menu do cadastro de Pacientes");
        console.log("1-Cadastrar novo paciente");
        console.log("2-Excluir paciente");
        console.log("3-Listar pacientes (ordenado por CPF)");
        console.log("4-Listar pacientes (ordenado por nome)");
        console.log("5-Voltar p/ menu principal");
    }

    menuAgenda(){
        console.log("Agenda");
        console.log("1-Agendar consulta");
        console.log("2-Cancelar agendamento");
        console.log("3-Listar agenda");
        console.log("4-Voltar p/ menu principal");
    }

    cadastroPaciente(){
        let p = 0;
        console.log("Cadastro de Paciente:");
        const cpf = read.question("CPF: ");
        const nome = read.question("Nome: ");
        const dataNascimento = read.question("Data de Nascimento (DD/MM/AAAA): ");
        
        try {
            p = new Paciente(cpf, nome, dataNascimento);
        } catch (error) {
            console.log(error.message);
        }
        return p;
    }

}

// Exporta a classe Menus 
module.exports = Menus;