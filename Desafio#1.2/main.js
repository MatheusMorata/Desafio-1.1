// Importações
const Menus = require('./menus');
const read = require('readline-sync');
let Cadastro = require('./cadastro');

// Variáveis e Objetos
const menu = new Menus();
let cadastro = new Cadastro(); 
let op = 0 
let op_paciente = 0
let op_agenda = 0

while(op != 3){
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
            }
        }      
    }else if(op == 2){
        while(op_agenda != 4){
            menu.menuAgenda();
            op_agenda = read.question();
            console.clear();
        }
    }else if(op == 3){
        console.log("Até logo...");
    }else{
        console.log("Opcao inválida");
    }
}