const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.posts = require("./post.model.js")(sequelize, Sequelize);
db.comments = require("./comment.model.js")(sequelize, Sequelize);
db.likesOrDislikes = require("./likeOrDislike.model.js")(sequelize, Sequelize);

db.users.hasMany(db.posts, { as: "posts" });
db.posts.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user"
});
db.users.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user"
});
db.users.hasMany(db.likesOrDislikes, { as: "likesOrDislikes" });
db.likesOrDislikes.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user"
});
db.posts.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.posts, {
    foreignKey: "postId",
    as: "post"
});
db.posts.hasMany(db.likesOrDislikes, { as: "likesOrDislikes" });
db.likesOrDislikes.belongsTo(db.posts, {
    foreignKey: "postId",
    as: "post"
});
db.comments.hasMany(db.likesOrDislikes, { as: "likesOrDislikes" });
db.likesOrDislikes.belongsTo(db.comments, {
    foreignKey: "commentId",
    as: "comment"
});

module.exports = db;