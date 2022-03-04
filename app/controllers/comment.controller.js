const db = require("../models");
const Comment = db.comments;


exports.createComment = (req, res) => {
    if (!req.body.text) {
        res.status(400).send({
            message: 'Les données du commentaire sont vides'
        });
        return
    }
    const userId = req.params.userId;
    const postId = req.params.postId;
    const comment = {
        text: req.body.text,
        file: req.body.file,
        userId: userId,
        postId: postId
    }
    return Comment.create({
        text: comment.text,
        file: comment.file,
        userId: userId,
        postId: postId
    })
        .then((comment) => {
            res.send(comment);
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

// retirer commentaire
// update
// findByID
// findAll


