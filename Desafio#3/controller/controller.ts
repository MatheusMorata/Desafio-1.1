import { adicionarPaciente, delPaciente, listarPorCPF, listarPorNome, PacienteModel } from '../model/Paciente';
import * as read from 'readline-sync';

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


// Função para imprimir os pacientes listados por nome e retorná-los em um array de objetos
export async function printNome(): Promise<{ cpf: string, nome: string, dataNascimento: string }[]> {
    
    try {
        const pacientes = await listarPorNome();
        console.log("Pacientes listados por nome:");
        
        const pacientesArray: { cpf: string, nome: string, dataNascimento: string }[] = [];

        pacientes.forEach(paciente => {
            console.log(`Nome: ${paciente.nome}, CPF: ${paciente.cpf}, Data de Nascimento: ${paciente.dataNascimento}`);
            pacientesArray.push({ cpf: paciente.cpf, nome: paciente.nome, dataNascimento: paciente.dataNascimento });
        });

        return pacientesArray;
    } catch (error) {
        console.error('Erro ao listar pacientes por nome:', error.message);
        return []; // Retorna um array vazio em caso de erro
    }
}

export function teste(pacientesArray): void {
    console.log("Dados dos pacientes:");

    pacientesArray.forEach(paciente => {
        console.log(`Nome: ${paciente.nome}, CPF: ${paciente.cpf}, Data de Nascimento: ${paciente.dataNascimento}`);
    });
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