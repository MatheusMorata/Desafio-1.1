import read from 'readline-sync';

export class Interface{
    
    MenuPrincipal(){
        console.log("Menu Principal");
        console.log("1-Cadastro de pacientes");
        console.log("2-Agenda");
        console.log("3-Fim");
    }

    MenuCadastroPaciente(){
        console.log("Menu do cadastro de Pacientes");
        console.log("1-Cadastrar novo paciente");
        console.log("2-Excluir paciente");
        console.log("3-Listar pacientes (ordenado por CPF)");
        console.log("4-Listar pacientes (ordenado por nome)");
        console.log("5-Voltar p/ menu principal");
    }

    MenuAgenda(){
        console.log("Agenda");
        console.log("1-Agendar consulta");
        console.log("2-Cancelar agendamento");
        console.log("3-Listar agenda");
        console.log("4-Voltar p/ menu principal");
    }

}