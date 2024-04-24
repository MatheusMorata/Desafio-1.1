import { conexao } from "../database/db";
import { DataTypes, Model, Optional } from "sequelize";

interface AgendamentoAttributes {
  id: number;
  inicio: string; 
  fim: string; 
  id_paciente: number;
}

interface AgendamentoCreationAttributes extends Optional<AgendamentoAttributes, "id"> {}

class Agendamento extends Model<AgendamentoAttributes, AgendamentoCreationAttributes> implements AgendamentoAttributes {
  public id!: number;
  public inicio!: string;
  public fim!: string;
  public id_paciente!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Agendamento.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    inicio: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    fim: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    id_paciente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: conexao, timestamps: false }
);

export { Agendamento };
