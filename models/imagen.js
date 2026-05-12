import { Model,  DataTypes } from "sequelize";
import sequelize from "./config.js";

export class imagen extends Model {}

imagen.init({
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
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING(50),
  },
  promedio: {
    type: DataTypes.FLOAT,
  },
  copyrigth: {
    type: DataTypes.BOOLEAN,
  },
  licencia: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  marcaAgua: {
    type: DataTypes.STRING,
  },
  texto_personalizado: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: "imagen",
  tableName: "imagenes",
  createdAt: true,
  deletedAt: true,
});