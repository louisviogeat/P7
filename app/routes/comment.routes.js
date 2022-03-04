const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const commentCtrl = require('../controllers/comment.controller');

router.post('/user/:userId/post/:postId/comment', auth, commentCtrl.createComment);
router.put('/post/:postId/comment/:commentId', commentCtrl.updateComment);
router.delete('/post/:postId/comment/:commentId', commentCtrl.delete);
router.get('/comments', commentCtrl.findAll);
//router.get('/post/:id', postCtrl.findPostById);



module.exports = router;