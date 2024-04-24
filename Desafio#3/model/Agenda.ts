import { conexao } from "../database/db";
import { DataTypes, Model, Optional } from "sequelize";

interface AgendamentoAttributes {
  id: number;
  inicio: Date;
  fim: Date;
  id_paciente: number;
}

interface AgendamentoCreationAttributes extends Optional<AgendamentoAttributes, "id"> {}

class Agendamento extends Model<AgendamentoAttributes, AgendamentoCreationAttributes> implements AgendamentoAttributes {
  public id!: number;
  public inicio!: Date;
  public fim!: Date;
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
      type: DataTypes.DATE,
      allowNull: false,
    },
    fim: {
      type: DataTypes.DATE,
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
