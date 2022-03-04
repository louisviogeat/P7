
module.exports = (sequelize, DataTypes) => {
    const LikeOrDislike = sequelize.define("likeOrDislike", {
        isALike: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    return LikeOrDislike;
};