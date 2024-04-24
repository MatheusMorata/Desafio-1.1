import * as read from 'readline-sync';
import {menuPaciente} from './MenuPaciente';
import {menuAgenda} from './MenuAgenda';

export function menuPrincipal():void {

    let ativo:number = 0;

    while(ativo != 3){
        console.log("Menu Principal ");
        console.log("1-Cadastro de pacientes");
        console.log("2-Agenda");
        console.log("3-Fim");

        ativo = parseInt(read.question(''));
        console.clear();

        if(ativo == 1){ 
            menuPaciente();
        }else if(ativo == 2){
            menuAgenda();
        }else if(ativo == 3){
            console.log("Encerrando");
        }else{
            console.log("Opcao invalida. ");
        }
    }
}