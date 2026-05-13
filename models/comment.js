import { Model,DataTypes } from "sequelize";
import sequelize from "./config.js";

export class comment extends Model {}

comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    // Model attributes are defined here
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'comment', // We need to choose the model name
    tableName: 'comments',
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
  },
);

