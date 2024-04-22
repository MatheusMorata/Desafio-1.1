import { Model, DataTypes } from 'sequelize';
import { sql } from '../database/db';

export class PacienteModel extends Model {
  public cpf!: string;
  public nome!: string;
  public dataNascimento!: string;
}

PacienteModel.init({
  cpf: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
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
  sequelize: sql,
  modelName: 'PacienteModel'
});

// Sincronize o modelo com o banco de dados
(async () => {
  try {
    await PacienteModel.sync({ force: true });
    console.log('Modelo sincronizado com o banco de dados');
  } catch (error) {
    console.error('Erro ao sincronizar modelo com o banco de dados:', error);
  } 
})();