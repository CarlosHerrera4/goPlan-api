
const express = require('express');
const router = express.Router();
const randomplan = require('../controllers/randomplan.controller');
const secure = require('../middleware/secure.middleware');
const user = require('../middleware/user.middleware');

router.get('/', randomplan.getRandomPlan);

module.exports = router;