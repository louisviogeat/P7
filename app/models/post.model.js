
module.exports = (sequelize, DataTypes) => {
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