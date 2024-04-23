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


export async function criarPaciente(cpf, nome, dataNascimento) {
    try {
        const paciente = await Paciente.create({ cpf, nome, dataNascimento });
        return paciente;
    } catch (error) {
        throw new Error('Erro ao criar paciente: ' + error.message);
    }
}

(async () => {
    await conexao.sync({ force: true }); // Esta linha pode ser movida para o script principal, se necessário
})();
