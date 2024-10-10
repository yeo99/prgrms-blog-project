const express = require('express');
const postRoute = require('./postRoute');
const HelloRoute = require('./HelloRoute');

const router = express.Router();

router.use('/posts', postRoute);

module.exports = router;
