import { Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "./config.js";

export class favorite extends Model {}

favorite.init(
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
    modelName: "favorite",
    tableName: "favorites",
    createdAt: true,
    deletedAt: true,
  },
);