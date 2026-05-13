import { Model,  DataTypes } from "sequelize";
import sequelize from "./config.js";

export class complaint_comment extends Model {}

complaint_comment.init({
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
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: false,
},
  description: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  reason: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: "complaint_comment",
  tableName: "complaints_comments",
  createdAt: true,
  deletedAt: true,
});