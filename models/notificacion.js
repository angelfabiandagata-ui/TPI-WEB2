import { Model,  DataTypes } from "sequelize";
import sequelize from "./config.js";

export class notificacion extends Model {}

notificacion.init({
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
  valoracion_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
},
  denuncia_publicacion_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  denuncia_user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  denuncia_comentario_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    },
  leida: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },  
}, {
  sequelize,
  modelName: "notificacion",
  tableName: "notificaciones",
  createdAt: true,
  deletedAt: true,
});