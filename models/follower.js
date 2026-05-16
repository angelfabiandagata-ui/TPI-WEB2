import { Model, DataTypes } from "sequelize";
import sequelize from "./config.js";

export class follower extends Model { }

follower.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    followed_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'followed_id'
    },
    follower_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'follower_id'
    },
    initial_date: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'initial_date'
    },
    ending_date: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'ending_date'
    },

}, {
    sequelize,
    modelName: "follower",
    tableName: "followers",
    createdAt: true,
    deletedAt: true,
});