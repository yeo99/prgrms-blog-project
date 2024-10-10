const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

// 댓글 추가
router.post('/:id', commentController.addComment);

module.exports = router;
