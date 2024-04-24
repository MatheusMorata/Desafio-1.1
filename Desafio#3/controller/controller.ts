import { adicionarPaciente, delPaciente, listarPorCPF, listarPorNome} from '../model/Paciente';
import { Agendamento } from '../model/Agenda';
import * as read from 'readline-sync';

interface Paciente {
    cpf: string;
    nome: string;
    dataNascimento: string;
}

function validarCPF(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
        return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
        return false;
    }
    return true;
}

export function cadastrar(): void {
    // Solicita os dados do paciente
    const cpf: string = read.question('Digite seu CPF: ');
    const nome: string = read.question('Digite o nome: ');
    const dataNascimento: string = read.question('Digite a data de nascimento (DD/MM/AAAA): ');

    // Verifica se o CPF é válido
    if (!validarCPF(cpf)) {
        console.error('CPF inválido. Por favor, insira um CPF válido.');
        return;
    }

    // Verifica se o nome possui pelo menos 5 caracteres
    if (nome.length < 5) {
        console.error('O nome deve ter pelo menos 5 caracteres.');
        return;
    }

    // Verifica se a data de nascimento está no formato correto
    const dataNascimentoRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dataNascimento.match(dataNascimentoRegex)) {
        console.error('Formato de data de nascimento inválido. Use o formato DD/MM/AAAA.');
        return;
    }

    // Adiciona o paciente apenas se todas as verificações passarem
    adicionarPaciente(cpf, nome, dataNascimento);
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



export async function agendarConsulta(): Promise<void> {
    try {
        const idPaciente: number = parseInt(read.question('Digite o ID do paciente para agendar a consulta: '));
        const dataConsulta: string = read.question('Digite a data da consulta (DD/MM/AAAA): ');
       
        await Agendamento.create({
            inicio: dataConsulta, 
            fim: dataConsulta, 
            id_paciente: idPaciente,
        });

        console.log(`Consulta agendada para o paciente com ID ${idPaciente} na data ${dataConsulta}`);
    } catch (error) {
        console.error('Erro ao agendar consulta:', error.message);
    }
}

export async function cancelarConsulta(): Promise<void> {
    try {
        const idAgendamento: number = parseInt(read.question('Digite o ID do agendamento para cancelar: '));
       
        // Busca o agendamento pelo ID
        const agendamento = await Agendamento.findByPk(idAgendamento);
        
        // Verifica se o agendamento existe
        if (!agendamento) {
            console.log('Agendamento não encontrado.');
            return;
        }
        
        // Remove o agendamento do banco de dados
        await agendamento.destroy();
        
        console.log(`Agendamento cancelado com sucesso.`);
    } catch (error) {
        console.error('Erro ao cancelar agendamento:', error.message);
    }
}

export async function listarAgenda(): Promise<void> {
    try {
        const agenda = await Agendamento.findAll();
        console.log("Agenda de consultas:");
        agenda.forEach(item => {
            console.log(`ID: ${item.id}, Início: ${item.inicio}, Fim: ${item.fim}, ID do Paciente: ${item.id_paciente}`);
        });
    } catch (error) {
        console.error('Erro ao listar agenda:', error.message);
    }
}