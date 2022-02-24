
module.exports = (sequelize, DataTypes) => {
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