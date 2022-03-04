const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const commentCtrl = require('../controllers/comment.controller');

router.post('/user/:userId/post/:postId/comment', auth, commentCtrl.createComment);
//router.get('/posts', postCtrl.findAll);
//router.get('/post/:id', postCtrl.findPostById);



module.exports = router;