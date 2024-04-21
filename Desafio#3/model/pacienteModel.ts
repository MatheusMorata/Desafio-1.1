import { Sequelize, Model, DataTypes } from 'sequelize';

// Abrindo conexão
const sequelize = new Sequelize({
    dialect: 'postgres',
    storage: 'database.postgres'
});

// Criando modelo Paciente
class Paciente extends Model {
    // Define o modelo Paciente
    static initModel(sequelize) {
        return super.init({
            cpf: DataTypes.STRING,
            nome: DataTypes.STRING,
            dataNascimento: DataTypes.STRING
        }, { sequelize, modelName: 'paciente', tableName: 'pacientes' });
    }
}

// Inicializa o modelo
Paciente.initModel(sequelize);

// Sincroniza com o banco de dados (cria a tabela "pacientes" se não existir)
sequelize.sync({ force: true });
