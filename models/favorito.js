import { Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "./config.js";

export class favorito extends Model {}

favorito.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "favorito",
    tableName: "favoritos",
    createdAt: true,
    deletedAt: true,
  },
);