
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("post", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        file: {
            type: DataTypes.STRING
        }
    });
    return Post;
};