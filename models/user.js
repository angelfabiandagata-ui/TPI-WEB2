import { Model, DataTypes } from "sequelize";
import  sequelize  from './config.js';

export class user extends Model {}

user.init(
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        profile_photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        number_publications_removed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: "user",
        tableName: "users",
        createdAt: true,
        deletedAt: true,
    }
);
