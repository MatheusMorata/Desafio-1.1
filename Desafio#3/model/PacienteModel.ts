import { Model, DataTypes } from 'sequelize';
import { sql } from '../database/db';

export class PacienteModel extends Model {
  static initModel() {
    return super.init({
      cpf: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dataNascimento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize: sql,
      modelName: 'PacienteModel',
      tableName: 'Paciente'
    });
  }
}


PacienteModel.initModel();
sql.sync({force: true});
