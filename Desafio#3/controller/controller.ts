import { adicionarPaciente, delPaciente, listarPorCPF, listarPorNome} from '../model/Paciente';
import * as read from 'readline-sync';

interface Paciente {
    cpf: string;
    nome: string;
    dataNascimento: string;
}

export function cadastrar(): void{
    const cpf: string = read.question('Digite seu CPF: ');
    const nome: string = read.question('Digite o nome: ');
    const dataNascimento: string = read.question('Digite a data de nascimento: (DD/MM/AAAA)');
    adicionarPaciente(cpf,nome,dataNascimento);
}

export function deletar(): void{
    const id: number = parseInt(read.question('Digite o id: '));
    delPaciente(id);
}

export async function printNome(){

    try {
        const pacientes = await listarPorNome();
        console.log("Pacientes listados por nome:");
    
        pacientes.forEach(paciente => {   
            console.log("CPF: ",paciente.cpf,"\nNome: ",paciente.nome,"\nData Nascimento: ",paciente.dataNascimento);
        });

    } catch (error) {
        console.error('Erro ao listar pacientes por nome:', error.message);
        return []; // Retorna um array vazio em caso de erro
    }
}



export async function printCPF(): Promise<void> {
    try {
        const pacientes = await listarPorCPF();
        console.log("Pacientes listados por CPF:");
        pacientes.forEach(paciente => {
            console.log(`CPF: ${paciente.cpf}, Nome: ${paciente.nome}, Data de Nascimento: ${paciente.dataNascimento}`);
        });
    } catch (error) {
        console.error('Erro ao listar pacientes por CPF:', error.message);
    }
}