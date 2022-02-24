const db = require("./app/models");
const userCtrl = require("./app/controllers/user.controller");
const postCtrl = require("./app/controllers/post.controller");
const commentCtrl = require("./app/controllers/comment.controller");
const likeOrDislikeCtrl = require("./app/controllers/likeOrDislike.controller");
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
});
const run = async () => {

    const user1 = await userCtrl.create({
        firstName: "Bob",
        lastName: "Marley",
        email: "bob.marley@wailers.fr",
        password: '1234',
        profilePicture: ''
    });

    const post1 = await postCtrl.createPost(user1.id, {
        text: "Good job!",
        file: '',
        userId: user1.id
    });

    await postCtrl.createPost(user1.id, {
        text: "One of the best tuts!",
        file: '',
        userId: user1.id
    });

    const comment1 = await commentCtrl.createComment(user1.id, post1.id, {
        text: 'Je commente ce post',
        file: '',
        userId: user1.id,
        postId: post1.id
    });

    const user1data = await userCtrl.findUserById(user1.id);
    console.log(
        ">> user id=" + user1data.id,
        JSON.stringify(user1data, null, 2)
    );

};
