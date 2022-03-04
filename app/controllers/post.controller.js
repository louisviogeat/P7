const db = require("../models");
const Post = db.posts;

exports.createPost = (req, res) => {
    if (!req.body.text) {
        res.status(400).send({
            message: 'Les données du post sont vides'
        });
        return
    }
    return Post.create({
        text: req.body.text,
        file: req.body.file,
        userId: req.params.id,
    })
        .then((post) => {
            res.send(post);
            return post;
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
            console.log(">> Error while creating post: ", err);
        });
};

exports.findAll = (req, res) => {
    return Post.findAll({
        include: ["comments", "user"]
    }).then((posts) => {
        res.send(posts);
        return posts;
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving posts."
        });
    });
};

exports.findPostById = (req, res) => {
    const id = req.params.id;
    return Post.findByPk(id, { include: ["comments"] })
        .then((post) => {
            if (post) {
                res.send(post);
                return post;
            } else {
                res.status(404).send({
                    message: `Cannot find post with id=${id}.`
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving Post with id=" + id
            });
            console.log(">> Error while finding post: ", err);
        });
};

exports.updatePost = (req, res) => {
    //findPostById const userConnected 
    //const userIdConnected = req.body.userId;
    //const userOfPost = 

    Post.update(req.body, {
        where: { id: req.params.id },
    }
    ).then(() => res.status(200).json({ message: 'Post modifié' })
    ).catch(error => res.status(400).json({ error }));
};

exports.delete = (req, res) => {
    Post.destroy({
        where: { id: req.params.id }
    }).then(() => res.status(200).json({ message: 'Post supprimé' }))
        .catch(error => res.status(400).json({ error }));
}



