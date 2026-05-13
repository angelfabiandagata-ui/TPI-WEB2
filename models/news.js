import { Model,  DataTypes } from "sequelize";
import sequelize from "./config.js";

export class news extends Model {}

news.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  user_id_emisor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id_receptor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },    
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  assessment_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
},
  complaint_publication_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  complaint_user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  complaint_comment_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    },
  read: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },  
}, {
  sequelize,
  modelName: "news",
  tableName: "news",
  createdAt: true,
  deletedAt: true,
});