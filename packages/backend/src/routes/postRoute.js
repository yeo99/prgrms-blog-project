const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

// /post/~
router.post('/', postController.createPost); // 게시글 생성
router.put('/:id', postController.updatePost); // 게시글 수정
router.delete('/:id', postController.deletePost); // 게시글 삭제

module.exports = router;
