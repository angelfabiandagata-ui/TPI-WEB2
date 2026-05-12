import { Model, DataTypes } from "sequelize";
import sequelize from "./config.js";

export class valoracion extends Model {}

valoracion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    puntaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "valoracion",
    tableName: "valoraciones",
    createdAt: true,
    deletedAt: true,
  },
);