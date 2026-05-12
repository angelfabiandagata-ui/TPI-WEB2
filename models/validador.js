import { Model,DataTypes } from "sequelize";
import  sequelize  from './config.js';

export class validador extends Model {}

validador.init(
    {
        id_validador: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pendiente',
        },
    },
    {
        sequelize,
        modelName: "validador",
        tableName: "valoraciones",
        createdAt: true,
        deletedAt: true,
    },
);