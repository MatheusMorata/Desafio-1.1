import { conexao } from '../database/db';
import { DataTypes, Model } from 'sequelize';

// Defina uma interface para representar a estrutura de um paciente
export interface PacienteModel extends Model {
    id: number;
    cpf: string;
    nome: string;
    dataNascimento: string;
}

const Paciente = conexao.define<PacienteModel>('Paciente', {
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

export async function delPaciente(id: number): Promise<void> {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
        throw new Error('Paciente não encontrado.');
    }
    await paciente.destroy();
}

export async function listarPorNome(): Promise<PacienteModel[]> {
    return await Paciente.findAll<PacienteModel>({
        order: [['nome', 'ASC']]
    });
}

export async function listarPorCPF(): Promise<PacienteModel[]> {
    return await Paciente.findAll<PacienteModel>({
        order: [['cpf', 'ASC']]
    });
}

export async function adicionarPaciente(cpf: string, nome: string, dataNascimento: string) {
    await Paciente.create<PacienteModel>({
        cpf: cpf,
        nome: nome,
        dataNascimento: dataNascimento
    });
}