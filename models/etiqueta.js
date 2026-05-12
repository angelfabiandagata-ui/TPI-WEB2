import { Model, DataTypes } from "sequelize";
import sequelize from "./config.js";

export class etiqueta extends Model { }

etiqueta.init(
    {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
  },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "etiqueta",
        tableName: "etiquetas",
        createdAt: true,
        deletedAt: true,
    }

);