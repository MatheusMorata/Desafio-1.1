import {PacienteModel} from '../model/PacienteModel';
import * as read from 'readline-sync';

export class PacienteController{
    public sql:PacienteModel = new PacienteModel();
    
    cadastrarPaciente():void{
        const cpf:string = read.question('Digite o CPF: ');
        const nome:string = read.question('Digtie o nome: ');
        const dataNascimento:string = read.question('Digite a data de nascimento: (DD/MM/AAAA)');
    }

    deletarPaciente():void{
        const cpf:string = read.question('Digite o CPF: ');
        
    }
}