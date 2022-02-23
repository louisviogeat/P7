const db = require("../models");
const User = db.users;

// Create and Save a new Tutorial
exports.create = (user) => {
    return User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        profilePicture: user.profilePicture
    }).then((user) => {
        console.log(">> Created user: " + JSON.stringify(user, null, 4));
        return user;
    }).catch((err) => {
        console.log(">> Error while creating user: ", err);
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

};
// Find a single Tutorial with an id
exports.findOne = (userId) => {
    return User.findByPk(userId, { include: ["posts"] })
        .then((user) => {
            return user;
        })
        .catch((err) => {
            console.log(">> Error while finding user: ", err);
        });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};