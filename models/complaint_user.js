import { Model,  DataTypes } from "sequelize";
import sequelize from "./config.js";

export class complaint_user extends Model {}

complaint_user.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  modelName: "complaint_user",
  tableName: "complaint_users",
  createdAt: true,
  deletedAt: true,
});