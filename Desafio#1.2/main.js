// Importações
const Menus = require('./menus');
const read = require('readline-sync');
let Cadastro = require('./cadastro');
let Agenda = require('./agenda');

// Variáveis e Objetos
const menu = new Menus();
let cadastro = new Cadastro();
let agenda = new Agenda(); 
let op = 0 
let op_paciente = 0
let op_agenda = 0

while(op != 3){
    op_paciente = 0
    op_agenda = 0
    menu.menuPrincipal();
    op = read.question();
    console.clear();
    if(op == 1){
        while(op_paciente != 5){
            menu.menuPaciente();
            op_paciente = read.question();
            console.clear();
            if(op_paciente == 1){
                const p = menu.cadastroPaciente();
                cadastro.adicionar(p);
                console.clear();
            }else if(op_paciente == 2){
                const cpf = read.question("Digite o CPF a ser excluido: ").toString();
                cadastro.excluir(cpf);
            }else if(op_paciente == 3){
                cadastro.printCPF();
            }else if(op_paciente == 4){
                cadastro.printNome();
            }else if(op_paciente == 5){
                console.clear();
            }else{
                console.log("Opcao Invalida");
            }
        }      
    }else if(op == 2){
        while(op_agenda != 4){
            menu.menuAgenda();
            op_agenda = read.question();
            console.clear();
            if(op_agenda == 1){
                const c = menu.agendarConsulta();
                try{
                    agenda.agendarConsulta(c.cpf,c.data,c.HoraInicial,c.HoraFinal);
                    console.clear();
                }catch(error){
                    console.log(error.message);
                }
            }else if(op_agenda == 2){
                const c = menu.cancelarConsulta();
                agenda.excluirConsulta(c.cpf,c.data,c.HoraInicial);
            }else if(op_agenda == 3){
                agenda.ListaAgenda();
            }else if(op_agenda == 4){
                console.clear();
            }else{
                console.clear();
            }
        }
    }else if(op == 3){
        console.log("Até logo...");
    }else{
        console.log("Opcao inválida");
    }
}