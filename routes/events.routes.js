const express = require('express');
const router = express.Router();
const events = require('../controllers/events.controller');
const secure = require('../middleware/secure.middleware');
const user = require('../middleware/user.middleware');

router.get('/', events.list);
router.post('/', events.create);

// router.get('/', secure.isAuthenticated, events.list);
// router.post('/', secure.isAuthenticated, events.create);


module.exports = router;