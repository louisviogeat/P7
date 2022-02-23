const db = require("../models");
const Comment = db.comments;


exports.createComment = (userId, postId, comment) => {
    return Comment.create({
        name: comment.name,
        text: comment.text,
        userId: userId,
        postId: postId
    })
        .then((comment) => {
            console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
            return comment;
        })
        .catch((err) => {
            console.log(">> Error while creating comment: ", err);
        });
};