import { adicionarPaciente } from '../model/Paciente';
import * as read from 'readline-sync';

export function cadastrarPaciente(): void{
    const cpf: string = read.question('Digite seu CPF: ');
    const nome: string = read.question('Digite o nome: ');
    const dataNascimento: string = read.question('Digite a data de nascimento: (DD/MM/AAAA)');
    adicionarPaciente(cpf,nome,dataNascimento);
}

