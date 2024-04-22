import { DataTypes, Model } from 'sequelize';
import { sql } from '../database/db'; // Verifique o caminho do seu arquivo de conexão

export class Paciente extends Model {
  public cpf!: string;
  public nome!: string;
  public dataNascimento!: string;

  // Adicione métodos de classe ou de instância, se necessário
}

Paciente.init({
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
  modelName: 'Paciente'
});
