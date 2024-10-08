const express = require('express')
const { getHello } = require('../controllers/HelloController.js')

const router = express.Router();
router.use(express.json())

router.get('/test', getHello);

module.exports = router;
