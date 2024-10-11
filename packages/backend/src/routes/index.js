const express = require('express');
const postRoute = require('./postRoute');
const commentRoute = require('./commentRoute');

const router = express.Router();

router.use('/posts', postRoute);
router.use('/comments', commentRoute);

module.exports = router;
