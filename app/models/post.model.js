const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        text: {
            type: DataTypes.STRING
        },
        file: {
            type: DataTypes.STRING
        }
    });
    return Post;
};