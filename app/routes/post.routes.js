const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


const postCtrl = require('../controllers/post.controller');

router.post('/user/:id/post', auth, postCtrl.createPost);
router.put('/post/:id', auth, postCtrl.updatePost);
router.delete('/post/:id', postCtrl.delete);
router.get('/posts', postCtrl.findAll);
router.get('/post/:id', postCtrl.findPostById);


module.exports = router;