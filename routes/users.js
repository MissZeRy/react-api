const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

router.post('/register',UserController.Register)
router.post('/login',UserController.Login)

module.exports = router;