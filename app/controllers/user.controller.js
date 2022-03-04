const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../models");
const User = db.users;

// Create and Save a new Tutorial
exports.signup = (req, res) => {
    if (!req.body.email) {
        res.status(400).send({
            message: 'Les données de l\'utilisateur sont vides'
        });
        return
    }
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            return User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,
                profilePicture: req.body.profilePicture,
                isAdmin: req.body.isAdmin
            }).then((user) => {
                res.status(201).send(user);
                return user;
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the User."
                });
                console.log(">> Error while creating user: ", err);
            });
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect ' });
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign(
                            { userId: user.id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => {
            res.status(500).json({ error })
        })
}

exports.findAll = (req, res) => {
    return User.findAll({
        include: ["posts", "comments"]
    }).then((users) => {
        res.send(users);
        return users;
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving users."
        });
    });
};
// Find a single Tutorial with an id
exports.findUserById = (req, res) => {
    const id = req.params.id;
    return User.findByPk(id, { include: ["posts", "comments"] })
        .then((user) => {
            if (user) {
                res.send(user);
                return user;
            } else {
                res.status(404).send({
                    message: `Cannot find user with id=${id}.`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
            console.log(">> Error while finding user: ", err);
        });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;

}
