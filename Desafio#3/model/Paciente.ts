import { conexao } from '../database/db';
import { DataTypes } from 'sequelize';

const Paciente = conexao.define('Paciente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false // Desativa os campos de timestamp
});

// Função para adicionar um paciente
export function adicionarPaciente(cpf,nome,dataNascimento) {
    
}

// Função para deletar um paciente por ID
export async function deletarPaciente(id) {
    try {
        const paciente = await Paciente.findByPk(id);
        if (!paciente) {
            throw new Error('Paciente não encontrado.');
        }
        await paciente.destroy();
        return 'Paciente deletado com sucesso.';
    } catch (error) {
        throw new Error('Erro ao deletar paciente: ' + error.message);
    }
}

// Função para listar pacientes ordenados por nome
export async function listarPorNome() {
    try {
        const pacientes = await Paciente.findAll({
            order: [['nome', 'ASC']]
        });
        return pacientes;
    } catch (error) {
        throw new Error('Erro ao listar pacientes por nome: ' + error.message);
    }
}

// Função para listar pacientes ordenados por CPF
export async function listarPorCPF() {
    try {
        const pacientes = await Paciente.findAll({
            order: [['cpf', 'ASC']]
        });
        return pacientes;
    } catch (error) {
        throw new Error('Erro ao listar pacientes por CPF: ' + error.message);
    }
}

async function teste(){
    try{
        await conexao.sync({ force: true }); // Esta linha pode ser movida para o script principal, se necessário
    await Paciente.create({ cpf:'teste2', nome:'teste2', dataNascimento:'teste2' });
    }catch(error){
        console.log(error);
    }
}
teste();