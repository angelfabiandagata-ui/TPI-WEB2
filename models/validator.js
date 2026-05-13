import { Model,DataTypes } from "sequelize";
import  sequelize  from './config.js';

export class validator extends Model {}

validator.init(
    {
        id_validator: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: "validator",
        tableName: "validators",
        createdAt: true,
        deletedAt: true,
    },
);