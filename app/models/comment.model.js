const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        text: {
            type: DataTypes.STRING
        },
        file: {
            type: DataTypes.STRING
        }
    });
    return Comment;
};