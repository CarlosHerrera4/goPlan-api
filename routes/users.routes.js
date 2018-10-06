const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');
const secure = require('../middleware/secure.middleware');
const user = require('../middleware/user.middleware');

router.post('/', users.create);
router.get('/', users.list);

// Para pruebas con Postman, si tenemos el middleware de autenticación, primero hacemos POST de autenticación
// y después podemos realizar el resto de peticiones get securizadas

// router.get('/', secure.isAuthenticated, users.list);
// router.get('/:id', secure.isAuthenticated, users.get);
// router.delete('/:id', secure.isAuthenticated, user.isMe(), users.delete)

module.exports = router;