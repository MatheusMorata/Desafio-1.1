import * as read from 'readline-sync';
import { MenuPaciente } from './MenuPaciente';
import { MenuAgenda } from './MenuAgenda';

export class Principal {

    public paciente: MenuPaciente = new MenuPaciente();
    public agenda: MenuAgenda = new MenuAgenda();

    Menu(): void {
        let ativo: number = 0;

        while (ativo !== 3) {
            console.log("Menu Principal");
            console.log("1-Cadastro de pacientes");
            console.log("2-Agenda");
            console.log("3-Fim");
            ativo = parseInt(read.question(''));
            console.clear();
            if(ativo == 1){
                this.paciente.Menu();
            }else if(ativo == 2){
                this.agenda.Menu();
            }else if(ativo == 3){
                console.log("Encerrando...");
            }
        }

    }

}