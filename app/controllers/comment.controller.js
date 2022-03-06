const db = require("../models");
const Comment = db.comments;


exports.createComment = (req, res) => {
    if (!req.body.text) {
        res.status(400).send({
            message: 'Les données du commentaire sont vides'
        });
        return
    }
    return Comment.create({
        text: req.body.text,
        file: req.body.file,
        userId: req.params.userId,
        postId: req.params.postId
    })
        .then((comment) => {
            res.status(201).send(comment);
            return comment;
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Comment."
            });
            console.log(">> Error while creating comment: ", err);
        });
};

exports.findAll = (req, res) => {
    return Comment.findAll({
        include: ["post", "user"]
    }).then((comments) => {
        res.status(201).send(comments);
        return comments;
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving comments."
        });
    });
};

exports.findCommentById = (req, res) => {
    const id = req.params.id;
    return Comment.findByPk(id, { include: ["user"] })
        .then((comment) => {
            if (comment) {
                res.status(201).send(comment);
                return comment;
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

exports.updateComment = (req, res) => {
    //findPostById const userConnected 
    //const userIdConnected = req.body.userId;
    //const userOfPost = 

    Comment.update(req.body, {
        where: { id: req.params.id },
    }
    ).then(() => res.status(200).json({ message: 'Commentaire modifié' })
    ).catch(error => res.status(400).json({ error }));
};

exports.delete = (req, res) => {
    Comment.destroy({
        where: { id: req.params.id }
    }).then(() => res.status(200).json({ message: 'Commentaire supprimé' }))
        .catch(error => res.status(400).json({ error }));
}



// findByID


