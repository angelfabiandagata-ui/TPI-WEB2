import { Model, DataTypes } from "sequelize";
import sequelize from "./config.js";

export class seguidor extends Model { }

seguidor.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    seguido_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    seguidor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: "seguidor",
    tableName: "seguidores",
    createdAt: true,
    deletedAt: true,
});