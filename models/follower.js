import { Model, DataTypes } from "sequelize";
import sequelize from "./config.js";

export class follower extends Model { }

follower.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    followed_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    follower_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    initial_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    ending_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: "follower",
    tableName: "followers",
    createdAt: true,
    deletedAt: true,
});