import { Model, DataTypes } from "sequelize";
import sequelize from "./config.js";

export class assessment extends Model {}

assessment.init(
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
    score: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "assessment",
    tableName: "assessments",
    createdAt: true,
    deletedAt: true,
  },
);