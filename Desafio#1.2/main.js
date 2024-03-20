// Importações
const read = require('readline-sync');
const Menus = require('./menus');
const Cadastro = require('./cadastro');
const Paciente = require('./paciente');

// Variáveis e Objetos
const menus = new Menus();
const cadastro = new Cadastro();
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
            if(op_paciente == 1){
                const nome = read.question("Digite o nome do paciente: ");
                const cpf = read.question("Digite o CPF do paciente: ").toString();
                const dia = read.question("Digite o dia de nascimento do paciente: ");
                const mes = read.question("Digite o mes de nascimento do paciente: ");
                const ano = read.question("Digite o ano de nascimento do paciente: ");
                try{
                    const p = new Paciente(cpf, nome, dia, mes, ano);
                    
                    console.clear();
                }catch(error){
                    console.log(error.message);
                }
            }else if(op_paciente == 2){
                const cpf = read.question("Digite o cpf do paciente para exclusão: ");
                
            }else if(op_paciente == 3){
                try{
                    
                }catch(error){
                    console.log(error.message);
                }
            }else if(op_paciente == 4){
                try{
                      
                }catch(error){
                    console.log(error.message);
                }
            }else if(op_paciente == 5){
                console.clear();
            }else{
                console.clear();
                console.log("Opcao inválida"); 
            }
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