const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

// /posts/~
router.post('/:comment_id', commentController.addComment);
router.put('/:comment_id', commentController.updateComment);
router.delete('/:comment_id', commentController.deleteComment);

module.exports = router;
