import { Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "./config.js";

export class coleccion extends Model {}

coleccion.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        post_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        titulo:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        categoria:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        publico:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        },
    },
        {
            sequelize,
            modelName: 'coleccion',
            tableName: 'colecciones',
            createdAt: true,
            deletedAt: true,
            updatedAt: true,

        },

);