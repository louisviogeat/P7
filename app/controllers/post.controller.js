const db = require("../models");
const Post = db.posts;


exports.createPost = (userId, post) => {
    return Post.create({
        text: post.text,
        file: post.file,
        userId: userId,
    })
        .then((post) => {
            console.log(">> Created post: " + JSON.stringify(post, null, 4));
            return comment;
        })
        .catch((err) => {
            console.log(">> Error while creating post: ", err);
        });
};