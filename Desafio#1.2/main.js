// Importações
const read = require('readline-sync');
const Menus = require('./menus');

// Variáveis e Objetos
const menus = new Menus();
let op = 0;
let op_paciente = 0;
let op_agenda = 0;

while(op != 3){
    menus.menuPrincipal();
    op = read.question("Opcao: ");
    console.clear();
    if(op == 1){
        while(op_paciente != 5){
            menus.menuPaciente();
            op_paciente = read.question("Opcao: ");
            console.clear();
        }
    }else if(op == 2){
        while(op_agenda != 4){
            menus.menuAgenda();
            op_agenda = read.question("Opcao: ");
            console.clear();
        }
    }else if(op == 3){
        console.log("Até logo...");
    }else{
        console.log("Opcao inválida...");
    }
}