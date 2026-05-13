import { Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "./config.js";

export class buy extends Model {}

buy.init(
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
    modelName: "buy",
    tableName: "buys",
    createdAt: true,
    deletedAt: true,
  },
);