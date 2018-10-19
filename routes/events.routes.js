
const express = require('express');
const router = express.Router();
const events = require('../controllers/events.controller');
const secure = require('../middleware/secure.middleware');
const user = require('../middleware/user.middleware');

router.get('/', events.list);
router.post('/', events.create);

router.get('/plan', events.getPlan);
router.get('/:id', events.get);

// router.get('/randomplan', events.getRandomPlan);

// router.get('/', secure.isAuthenticated, events.list);
// router.post('/', secure.isAuthenticated, events.create);
// router.get('/:id', events.get);

module.exports = router;