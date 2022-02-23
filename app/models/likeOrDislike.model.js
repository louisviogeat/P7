const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    const LikeOrDislike = sequelize.define("likeOrDislike", {
        isALike: {
            type: DataTypes.BOOLEAN
        }
    });
    return LikeOrDislike;
};