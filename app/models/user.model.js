
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        profilePicture: {
            type: DataTypes.STRING
        }
    });
    return User;
};